import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, ShieldCheck, UsersRound } from "lucide-react";
import { centers, municipalities } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Login y registro | Tenlo",
  description: "Acceso para familias, profesionales locales, centros educativos y administración interna."
};

const roleExamples = [
  { title: "Familia", text: "Perfil adulto", Icon: UsersRound, className: "bg-lavender text-ink ring-ink/15" },
  { title: "Servicio profesional", text: "Actividad local", Icon: BriefcaseBusiness, className: "bg-coral/10 text-coral ring-coral/20" },
  { title: "Centro educativo", text: "Centro verificado", Icon: GraduationCap, className: "bg-petrol/10 text-petrol ring-petrol/20" },
  { title: "Equipo Tenlo", text: "Moderación", Icon: ShieldCheck, className: "bg-sage/20 text-petrol ring-sage/30" }
];

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

          <div className="mt-6 rounded-2xl border border-line bg-soft p-4">
            <h2 className="text-base font-bold text-slatecopy">¿Ya tienes cuenta?</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <label className="sr-only" htmlFor="login-email">Email</label>
              <input id="login-email" type="email" className="field m-0" placeholder="Email" />
              <label className="sr-only" htmlFor="login-password">Contraseña</label>
              <input id="login-password" type="password" className="field m-0" placeholder="Contraseña" />
              <button className="btn-secondary" type="submit">Entrar</button>
            </form>
          </div>

          <form className="mt-6 grid gap-4">
            <label className="field-label">Nombre público del adulto o entidad<input required className="field" placeholder="Ej. Marta, Academia Norte, Colegio Los Olivos" /></label>
            <label className="field-label">Email<input required type="email" className="field" /></label>
            <label className="field-label">Teléfono opcional<input type="tel" className="field" /></label>
            <label className="field-label">Imagen de perfil opcional<input type="file" accept="image/*" className="field cursor-pointer py-2" /></label>
            <p className="-mt-2 text-xs leading-5 text-muted">Si no subes imagen, Tenlo asignará un color y la inicial del nombre. No subir fotos de menores.</p>
            <label className="field-label">
              Municipio
              <select required className="field" defaultValue="">
                <option value="" disabled>Selecciona municipio</option>
                {municipalities.map((m) => <option key={m.id}>{m.name}</option>)}
              </select>
            </label>
            <label className="field-label">
              Centro relacionado opcional
              <select className="field" defaultValue="">
                <option value="">No indicado</option>
                {centers.map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
            </label>
            <label className="field-label">
              Tipo de usuario
              <select required className="field" defaultValue="">
                <option value="" disabled>Selecciona tipo de usuario</option>
                <option>Familia</option>
                <option>Servicio profesional</option>
                <option>Centro educativo</option>
                <option>Equipo Tenlo</option>
              </select>
            </label>
            <button className="btn-primary">Registrarme</button>
          </form>
        </div>
        <aside className="rounded-2xl border border-line bg-panel p-5 md:p-6">
          <h2 className="text-xl font-semibold text-ink">Así se verá tu perfil</h2>
          <div className="mt-5 grid gap-3">
            {roleExamples.map(({ title, text, Icon, className }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-line bg-soft p-4">
                <span className={`grid h-11 w-11 place-items-center rounded-full ring-1 ${className}`}>
                  <Icon size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="text-xs font-medium text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            El rol aparecerá en publicaciones, solicitudes y tablón para distinguir familias, profesionales y centros sin crear perfiles de menores.
          </p>
        </aside>
      </div>
    </div>
  );
}
