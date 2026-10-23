"use client";

type Props = {
  onClose: () => void;
};

export default function ContactSuccess({ onClose }: Props) {
  return (
    <div className="flex flex-col items-center py-2 text-center">
      <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
      <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-text sm:text-2xl">
        Mensagem enviada.
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
        Obrigado pelo contato. Vou responder assim que possível.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-bg transition-transform hover:-translate-y-0.5"
      >
        FECHAR
      </button>
    </div>
  );
}
