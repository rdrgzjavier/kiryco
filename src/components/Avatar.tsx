import type { Role } from "@/lib/types";

export function colorForName(name: string) {
  const total = Array.from(name || "Tenlo").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const palette = ["bg-[#D9EEF0]", "bg-[#F7D7C8]", "bg-[#E4E8D5]", "bg-[#E9D8FD]", "bg-[#DDE7F7]"];
  return palette[total % palette.length];
}

export function colorForRole(role: Role) {
  const colors = {
    family: "bg-[#E2E2F8] text-ink",
    provider: "bg-[#D9EEF0] text-ink",
    center: "bg-[#E4E8D5] text-ink",
    admin: "bg-ink text-white"
  };
  return colors[role];
}

export function roleLabel(role: Role | "family" | "provider" | "center" | "admin") {
  const labels = {
    family: "Familia",
    provider: "Servicio profesional",
    center: "Centro educativo",
    admin: "Administrador"
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
        <span className={"grid h-9 w-9 place-items-center rounded-full text-sm font-bold ring-1 ring-line " + colorForRole(role)}>{initial}</span>
      )}
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs font-medium text-muted">{roleLabel(role)}</p>
      </div>
    </div>
  );
}
