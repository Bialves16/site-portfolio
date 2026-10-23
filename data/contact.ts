/**
 * Public contact configuration.
 * Safe to expose on the client (mailto / WhatsApp links are public by nature).
 *
 * Server-side delivery uses CONTACT_EMAIL + RESEND_API_KEY from env.
 */

export const contactConfig = {
  /** Destination for mailto: and display purposes */
  email: "bialvesdf8@gmail.com",

  /**
   * WhatsApp number in international format without "+" or spaces.
   * Example: "5511999999999"
   * Replace the placeholder below with the real number when ready.
   */
  whatsappNumber: "5577998600536",

  whatsappPrefill:
    "Olá Beatriz! Vi seu portfólio e gostaria de conversar.",

  linkedin: "https://www.linkedin.com/in/bialvess/",
  github: "https://github.com/Bialves16",
} as const;

export function getMailtoHref(subject?: string): string {
  const base = `mailto:${contactConfig.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

export function getWhatsAppHref(): string | null {
  const number = contactConfig.whatsappNumber;
  if (!number || number.startsWith("PLACEHOLDER")) return null;

  const text = encodeURIComponent(contactConfig.whatsappPrefill);
  return `https://wa.me/${number}?text=${text}`;
}

export const contactLimits = {
  emailMax: 254,
  subjectMax: 120,
  messageMin: 10,
  messageMax: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  email: string;
  subject: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

export function sanitizeContactField(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export function validateContactPayload(
  input: unknown,
): ContactValidationResult {
  const raw = (input ?? {}) as Record<string, unknown>;
  const email = sanitizeContactField(raw.email, contactLimits.emailMax);
  const subject = sanitizeContactField(raw.subject, contactLimits.subjectMax);
  const message = sanitizeContactField(raw.message, contactLimits.messageMax);

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!email) errors.email = "Informe seu e-mail.";
  else if (!EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido.";

  if (!subject) errors.subject = "Informe o assunto.";

  if (!message) errors.message = "Escreva uma mensagem.";
  else if (message.length < contactLimits.messageMin) {
    errors.message = `A mensagem precisa ter pelo menos ${contactLimits.messageMin} caracteres.`;
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data: { email, subject, message } };
}
