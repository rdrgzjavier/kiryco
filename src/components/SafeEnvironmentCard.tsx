import { ShieldCheck } from "lucide-react";

type SafeEnvironmentCardProps = {
  compact?: boolean;
  title?: string;
  body?: string;
};

export default function SafeEnvironmentCard({
  compact = false,
  title = "Entorno seguro",
  body = "Tenlo está dirigido exclusivamente a personas adultas. No se publican perfiles, fotos, horarios personales ni datos sensibles de menores."
}: SafeEnvironmentCardProps) {
  return (
    <div className="rounded-2xl border border-sage/25 bg-sage/10 p-5 text-slatecopy">
      <div className="flex gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sage ring-1 ring-sage/25">
          <ShieldCheck size={compact ? 20 : 24} aria-hidden />
        </span>
        <div>
          <h2 className={compact ? "text-base font-semibold text-ink" : "text-xl font-semibold text-ink"}>{title}</h2>
          <p className="mt-2 text-sm leading-6">{body}</p>
        </div>
      </div>
    </div>
  );
}
