"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("kiryco-install-dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || ("standalone" in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));
    const isMobileLike = window.matchMedia("(max-width: 1024px), (pointer: coarse)").matches;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      if (!dismissed && !isStandalone && isMobileLike) setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    if (!dismissed && !isStandalone && isMobileLike) setVisible(true);

    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    window.localStorage.setItem("kiryco-install-dismissed", "1");
    setVisible(false);
  };

  const install = async () => {
    if (installEvent) {
      await installEvent.prompt();
      const choice = await installEvent.userChoice;
      if (choice.outcome === "accepted") dismiss();
      return;
    }
    alert("En iPhone/iPad: comparte esta página y elige Añadir a pantalla de inicio. En Android: abre el menú del navegador y elige Instalar app o Añadir a pantalla de inicio.");
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-line bg-white/95 p-3 shadow-soft backdrop-blur md:hidden" role="region" aria-label="Crear acceso directo a Kiryco">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">Añade Kiryco a tu pantalla de inicio</p>
          <p className="mt-1 text-xs leading-5 text-muted">Ábrelo como una app, sin buscar la web cada vez.</p>
          <button className="btn-primary mt-3 w-full" type="button" onClick={install}><Download size={16} />Instalar</button>
        </div>
        <button className="rounded-full p-1 text-muted hover:bg-soft hover:text-ink" aria-label="Ocultar aviso" onClick={dismiss}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
