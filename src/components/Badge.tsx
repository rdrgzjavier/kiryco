import { CheckCircle2, Clock3, Database, ShieldCheck, type LucideIcon } from "lucide-react";
import type { ModerationStatus, TrustLevel } from "@/lib/types";

export function VerifiedBadge({ verified }: { verified?: boolean }) {
  if (!verified) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sage/10 px-3 py-1 text-sm font-semibold text-sage">
      <CheckCircle2 className="text-sage" size={14} aria-hidden /> Verificado
    </span>
  );
}

export function TrustBadge({ level }: { level: TrustLevel }) {
  const config = {
    collected: { label: "Información recopilada", Icon: Database, className: "bg-soft text-slatecopy ring-line" },
    verified: { label: "Perfil verificado", Icon: CheckCircle2, className: "bg-sage/10 text-sage ring-sage/20" },
    official: { label: "Perfil verificado", Icon: ShieldCheck, className: "bg-sage/10 text-sage ring-sage/20" }
  } satisfies Record<TrustLevel, { label: string; Icon: LucideIcon; className: string }>;
  const { label, Icon, className } = config[level];

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ring-1 ${className}`}>
      <Icon size={14} aria-hidden /> {label}
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
    <span className="inline-flex items-center gap-1 rounded-full bg-soft px-3 py-1 text-sm font-semibold text-slatecopy ring-1 ring-line">
      <Clock3 className="text-ink" size={14} aria-hidden /> {labels[status]}
    </span>
  );
}
