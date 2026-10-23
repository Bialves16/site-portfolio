"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import ContactOptions from "./ContactOptions";
import ContactEmailForm from "./ContactEmailForm";
import ContactSuccess from "./ContactSuccess";

type View = "options" | "email" | "success";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState<View>("options");
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setView("options");
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  const duration = reduceMotion ? 0 : 0.24;

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-5">
          <motion.button
            type="button"
            aria-label="Fechar contato"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(90svh,720px)] w-full max-w-[520px] flex-col overflow-hidden border border-border-accent/50 bg-bg shadow-[0_0_40px_rgba(255,208,0,0.06)]"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
              scale: reduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : 8,
              scale: reduceMotion ? 1 : 0.98,
            }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-border bg-bg text-text transition-colors hover:border-accent/50 hover:text-accent sm:right-4 sm:top-4"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <div className="overflow-y-auto overscroll-contain px-5 py-8 text-center sm:px-8 sm:py-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
                CONTATO
              </p>
              <h2
                id={titleId}
                className="mx-auto mt-3 max-w-[18ch] font-sans text-2xl font-black uppercase tracking-tight text-text sm:text-[1.75rem]"
              >
                {view === "success"
                  ? "Pronto."
                  : view === "email"
                    ? "Enviar e-mail"
                    : "Vamos conversar."}
              </h2>

              {view === "options" ? (
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
                  Escolha a melhor forma de falar comigo.
                </p>
              ) : null}

              <div className="mt-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={view}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                  >
                    {view === "options" ? (
                      <ContactOptions onSelectEmail={() => setView("email")} />
                    ) : null}
                    {view === "email" ? (
                      <ContactEmailForm
                        onBack={() => setView("options")}
                        onSuccess={() => setView("success")}
                      />
                    ) : null}
                    {view === "success" ? (
                      <ContactSuccess onClose={onClose} />
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
