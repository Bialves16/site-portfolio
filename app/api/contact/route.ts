import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactConfig,
  validateContactPayload,
} from "@/data/contact";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateEntry = { count: number; resetAt: number };

const rateMap = new Map<string, RateEntry>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;

  entry.count += 1;
  rateMap.set(ip, entry);
  return true;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente em alguns minutos." },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => null);
    const validated = validateContactPayload(body);

    if (!validated.ok) {
      return NextResponse.json(
        { error: "Dados inválidos.", errors: validated.errors },
        { status: 400 },
      );
    }

    const { email, subject, message } = validated.data;
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || contactConfig.email;
    const from =
      process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const safeEmail = escapeHtml(email);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #111;">
          <p><strong>Nova mensagem pelo portfólio</strong></p>
          <p><strong>De:</strong> ${safeEmail}</p>
          <p><strong>Assunto:</strong> ${safeSubject}</p>
          <hr />
          <p>${safeMessage}</p>
        </div>
      `,
      text: `De: ${email}\nAssunto: ${subject}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar sua mensagem." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem." },
      { status: 500 },
    );
  }
}
