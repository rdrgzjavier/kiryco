"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function InstallPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem("kiryco-install-dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || ("standalone" in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone));
    const isMobileLike = window.matchMedia("(max-width: 1024px), (pointer: coarse)").matches;
    if (!dismissed && !isStandalone && isMobileLike) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-line bg-white/95 p-3 shadow-soft backdrop-blur md:hidden" role="region" aria-label="Crear acceso directo a Kiryco">
      <div className="flex items-start gap-3">
        <img src="/brand/kiryco-isotipo.svg" alt="" className="mt-0.5 h-9 w-9 rounded-xl" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">Lleva Kiryco en tu pantalla de inicio</p>
          <p className="mt-1 text-xs leading-5 text-muted">En el menú del navegador, elige “Añadir a pantalla de inicio” para abrirlo como una app.</p>
        </div>
        <button
          className="rounded-full p-1 text-muted hover:bg-soft hover:text-ink"
          aria-label="Ocultar aviso"
          onClick={() => { window.localStorage.setItem("kiryco-install-dismissed", "1"); setVisible(false); }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
