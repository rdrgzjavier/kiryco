import { CheckCircle2, Clock3 } from "lucide-react";
import type { ModerationStatus } from "@/lib/types";

export function VerifiedBadge({ verified }: { verified?: boolean }) {
  if (!verified) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold text-sage">
      <CheckCircle2 size={14} aria-hidden /> Verificado
    </span>
  );
}

export function StatusBadge({ status }: { status: ModerationStatus }) {
  const labels: Record<ModerationStatus, string> = {
    draft: "Borrador",
    pending_review: "Pendiente de revisión",
    published: "Publicado",
    rejected: "Rechazado",
    archived: "Archivado"
  };

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slatecopy ring-1 ring-line">
      <Clock3 size={14} aria-hidden /> {labels[status]}
    </span>
  );
}
