"use client";

import { useId, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import {
  contactLimits,
  validateContactPayload,
  type ContactPayload,
} from "@/data/contact";

type Status = "idle" | "loading" | "error";

type Props = {
  onBack: () => void;
  onSuccess: () => void;
};

const fieldClass =
  "w-full border border-border bg-bg px-3 py-3 font-sans text-sm text-text outline-none transition-colors placeholder:text-text-dim/50 focus:border-accent/55 disabled:opacity-60";

export default function ContactEmailForm({ onBack, onSuccess }: Props) {
  const formId = useId();
  const [values, setValues] = useState<ContactPayload>({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update =
    (field: keyof ContactPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setServerError(null);
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    const validated = validateContactPayload(values);
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }

    setStatus("loading");
    setServerError(null);
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
        errors?: Partial<Record<keyof ContactPayload, string>>;
      } | null;

      if (!res.ok) {
        if (data?.errors) setErrors(data.errors);
        setServerError(
          data?.error || "Não foi possível enviar sua mensagem.",
        );
        setStatus("error");
        return;
      }

      setStatus("idle");
      onSuccess();
    } catch {
      setServerError("Não foi possível enviar sua mensagem.");
      setStatus("error");
    }
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-sm space-y-5 text-center">
      <button
        type="button"
        onClick={onBack}
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-[0.16em] text-text-dim transition-colors hover:text-accent disabled:opacity-50"
      >
        <ArrowLeft size={12} />
        VOLTAR
      </button>

      <div>
        <label
          htmlFor={`${formId}-email`}
          className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-accent"
        >
          SEU E-MAIL
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={update("email")}
          disabled={loading}
          maxLength={contactLimits.emailMax}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-err` : undefined}
          className={`${fieldClass} text-center`}
          placeholder="voce@email.com"
        />
        {errors.email ? (
          <p
            id={`${formId}-email-err`}
            className="mt-2 font-mono text-[10px] tracking-wide text-red-400"
            role="alert"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${formId}-subject`}
          className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-accent"
        >
          ASSUNTO
        </label>
        <input
          id={`${formId}-subject`}
          name="subject"
          type="text"
          value={values.subject}
          onChange={update("subject")}
          disabled={loading}
          maxLength={contactLimits.subjectMax}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={
            errors.subject ? `${formId}-subject-err` : undefined
          }
          className={`${fieldClass} text-center`}
          placeholder="Sobre o quê você quer falar?"
        />
        {errors.subject ? (
          <p
            id={`${formId}-subject-err`}
            className="mt-2 font-mono text-[10px] tracking-wide text-red-400"
            role="alert"
          >
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-accent"
        >
          MENSAGEM
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          disabled={loading}
          maxLength={contactLimits.messageMax}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-err` : undefined
          }
          className={`${fieldClass} min-h-[120px] resize-y text-center`}
          placeholder="Conte um pouco sobre o projeto ou ideia."
        />
        <div className="mt-2 flex items-start justify-center gap-3">
          {errors.message ? (
            <p
              id={`${formId}-message-err`}
              className="font-mono text-[10px] tracking-wide text-red-400"
              role="alert"
            >
              {errors.message}
            </p>
          ) : null}
          <span className="shrink-0 font-mono text-[10px] text-text-dim">
            {values.message.length}/{contactLimits.messageMax}
          </span>
        </div>
      </div>

      {serverError ? (
        <div
          className="border border-red-400/30 bg-red-400/5 px-3 py-3 text-center"
          role="alert"
        >
          <p className="font-mono text-[11px] tracking-[0.08em] text-red-300">
            {serverError}
          </p>
          <p className="mt-1 text-sm text-text-dim">
            Verifique os dados e tente novamente.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-bg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            ENVIANDO
            <Loader2 size={14} className="animate-spin" />
          </>
        ) : (
          <>
            ENVIAR
            <ArrowRight size={14} strokeWidth={2.2} />
          </>
        )}
      </button>
    </form>
  );
}
