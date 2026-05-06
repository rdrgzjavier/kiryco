import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import { centers, municipalities } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Login y registro | Kiryco",
  description: "Acceso para familias, profesionales locales, centros educativos y administración interna."
};

export default function LoginPage() {
  return (
    <div className="page py-10">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-line bg-panel p-5 md:p-8">
          <p className="label">Solo adultos</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">Entrar o registrarse</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            El perfil representa a un adulto, un profesional o un centro. No se solicitan nombres, clases, fotos ni horarios personales de menores.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="field-label">Nombre público del adulto o entidad<input required className="field" placeholder="Ej. Marta, Academia Norte, Colegio Los Olivos" /></label>
            <label className="field-label">Email<input required type="email" className="field" /></label>
            <label className="field-label">Teléfono opcional<input type="tel" className="field" /></label>
            <label className="field-label">Imagen de perfil opcional<input type="file" accept="image/*" className="field cursor-pointer py-2" /></label>
            <p className="-mt-2 text-xs leading-5 text-muted">Si no subes imagen, Kiryco asignará un color y la inicial del nombre. No subir fotos de menores.</p>
            <label className="field-label">Municipio<select className="field">{municipalities.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
            <label className="field-label">Centro relacionado opcional<select className="field"><option>No indicado</option>{centers.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
            <label className="field-label">Tipo de usuario<select className="field"><option>Familia</option><option>Profesional local</option><option>Centro educativo</option><option>Equipo Kiryco</option></select></label>
            <button className="btn-primary">Continuar</button>
          </form>
        </div>
        <aside className="rounded-2xl border border-line bg-panel p-5 md:p-6">
          <h2 className="text-xl font-semibold text-ink">Así se verá tu perfil</h2>
          <div className="mt-5 rounded-xl border border-line bg-soft p-4"><Avatar name="Marta" role="family" /></div>
          <div className="mt-3 rounded-xl border border-line bg-soft p-4"><Avatar name="Academia Norte" role="provider" /></div>
          <div className="mt-3 rounded-xl border border-line bg-soft p-4"><Avatar name="Centro Los Olivos" role="center" /></div>
          <p className="mt-5 text-sm leading-6 text-muted">
            El rol aparecerá en publicaciones, solicitudes y tablón para distinguir familias, profesionales y centros sin crear perfiles de menores.
          </p>
        </aside>
      </div>
    </div>
  );
}
