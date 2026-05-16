"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ResponsiveFilterPanel({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div>
      <button type="button" className="btn-secondary w-full lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        Filtrar
      </button>
      {desktop || open ? <div className="mt-4 lg:mt-0">{children}</div> : null}
    </div>
  );
}
