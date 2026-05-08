import type { Role } from "@/lib/types";

const palette = ["bg-petrol", "bg-sage", "bg-coral", "bg-ink", "bg-slate-600"];

export function colorForName(name: string) {
  const total = Array.from(name || "Tenlo").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return palette[total % palette.length];
}

export function roleLabel(role: Role | "family" | "provider" | "center" | "admin") {
  const labels = {
    family: "Familia",
    provider: "Servicio profesional",
    center: "Centro educativo",
    admin: "Equipo Tenlo"
  };
  return labels[role];
}

export function roleFromPublicationType(type: "familia" | "proveedor" | "centro" | "comunidad"): Role {
  if (type === "proveedor") return "provider";
  if (type === "centro") return "center";
  return "family";
}

export default function Avatar({ name, role, image }: { name: string; role: Role; image?: string }) {
  const initial = (name || "T").trim().charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-2">
      {image ? (
        <img src={image} alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-line" />
      ) : (
        <span className={"grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white ring-1 ring-line " + colorForName(name)}>{initial}</span>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs font-medium text-muted">{roleLabel(role)}</p>
      </div>
    </div>
  );
}
