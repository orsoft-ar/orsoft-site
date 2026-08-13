"use client";

import { useEffect, useState } from "react";
import { applyConsent, getConsent, initAnalytics } from "@/utils/analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initAnalytics();
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const accept = () => {
    applyConsent("granted");
    setVisible(false);
  };

  const decline = () => {
    applyConsent("denied");
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[var(--input-border)] bg-[var(--background)] p-4 shadow-2xl shadow-black/20">
        <p className="text-sm leading-relaxed">
          Usamos cookies para medir las visitas y mejorar la experiencia. Necesitamos tu
          consentimiento para activar las analíticas (Google Analytics).
        </p>
        <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={decline}
            className="inline-flex items-center justify-center rounded-full border border-[var(--input-border)] px-5 py-2 text-sm text-foreground/80 transition-colors hover:border-violet-accent/50 hover:text-violet-accent"
          >
            Solo lo necesario
          </button>
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-full bg-violet px-5 py-2 text-sm text-white transition-colors hover:bg-violet-dark"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}