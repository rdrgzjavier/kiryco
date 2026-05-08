import Image from "next/image";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image src="/brand/tenlo-isotipo.svg" alt="" width={40} height={40} priority className="h-10 w-10" />
      {!compact ? <span className="font-poppins block text-base font-semibold text-ink">Tenlo</span> : null}
    </span>
  );
}
