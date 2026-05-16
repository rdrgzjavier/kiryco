"use client";

import {
  BriefcaseBusiness,
  Bus,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Laptop,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { useMemo, useState } from "react";
import { centers, municipalities } from "@/lib/mock-data";

type UserTypeId =
  | "familia"
  | "centro-educativo"
  | "extraescolares"
  | "tecnologia-online"
  | "transporte"
  | "fiestas-eventos"
  | "profesional-independiente"
  | "salud-bienestar"
  | "campamentos"
  | "otros";

const userTypes: Array<{
  id: UserTypeId;
  label: string;
  helper: string;
  subtypes?: string[];
}> = [
  { id: "familia", label: "Familia", helper: "Cuenta adulta para buscar, guardar y contactar.", subtypes: ["Madre/padre/tutor", "Familiar adulto", "Otro adulto responsable"] },
  { id: "centro-educativo", label: "Centro educativo", helper: "Colegios, escuelas infantiles y guarderías.", subtypes: ["Colegio", "Guardería"] },
  { id: "extraescolares", label: "Actividades extraescolares", helper: "Polideportivos, clubes y empresas de actividades.", subtypes: ["Polideportivo", "Empresa de actividades", "Club o escuela deportiva"] },
  { id: "tecnologia-online", label: "Tecnología y clases online", helper: "Empresas tecnológicas y profesores online.", subtypes: ["Empresa tecnológica", "Profesor particular online", "Academia online"] },
  { id: "transporte", label: "Transporte escolar", helper: "Rutas, transporte organizado y servicios autorizados.", subtypes: ["Servicio de ruta", "Particular o autónomo"] },
  { id: "fiestas-eventos", label: "Fiestas y eventos", helper: "Salas, espacios y organización de eventos familiares.", subtypes: ["Sala de eventos", "Organización de eventos", "Ocio familiar"] },
  { id: "profesional-independiente", label: "Profesional independiente", helper: "Canguros, profesores particulares y profesionales locales.", subtypes: ["Canguro", "Profesor particular", "Monitor o tallerista"] },
  { id: "salud-bienestar", label: "Salud y bienestar", helper: "Psicología, odontología, nutrición y bienestar familiar.", subtypes: ["Psicólogo", "Odontólogo", "Logopeda", "Nutricionista", "Otro profesional sanitario"] },
  { id: "campamentos", label: "Campamentos y vacaciones", helper: "Campamentos, días sin cole y actividades vacacionales.", subtypes: ["Campamento urbano", "Días sin cole", "Campamento externo", "Actividad vacacional"] },
  { id: "otros", label: "Otros", helper: "Servicios locales que no encajan en las categorías anteriores.", subtypes: ["Comercio local", "Asociación", "Servicio familiar", "Otro"] }
];

const roleExamples = [
  { title: "Familia", text: "Cuenta adulta", Icon: UsersRound, className: "bg-lavender text-ink ring-ink/15" },
  { title: "Centro educativo", text: "Colegio o guardería", Icon: GraduationCap, className: "bg-petrol/10 text-petrol ring-petrol/20" },
  { title: "Actividad local", text: "Extraescolares y campamentos", Icon: Sparkles, className: "bg-coral/10 text-coral ring-coral/20" },
  { title: "Profesional", text: "Servicio independiente", Icon: BriefcaseBusiness, className: "bg-sage/20 text-petrol ring-sage/30" },
  { title: "Salud y bienestar", text: "Profesional colegiado", Icon: HeartPulse, className: "bg-white text-coral ring-coral/20" },
  { title: "Equipo Tenlo", text: "Moderación", Icon: ShieldCheck, className: "bg-white text-sage ring-sage/30" }
];

const typeIcons: Record<UserTypeId, typeof UsersRound> = {
  familia: UsersRound,
  "centro-educativo": GraduationCap,
  extraescolares: Sparkles,
  "tecnologia-online": Laptop,
  transporte: Bus,
  "fiestas-eventos": PartyPopper,
  "profesional-independiente": BriefcaseBusiness,
  "salud-bienestar": HeartPulse,
  campamentos: CalendarDays,
  otros: HelpCircle
};

function selectedType(id: UserTypeId) {
  return userTypes.find((type) => type.id === id) ?? userTypes[0];
}

function needsBusinessFields(type: UserTypeId) {
  return type !== "familia";
}

function needsAgeAndAvailability(type: UserTypeId) {
  return ["extraescolares", "tecnologia-online", "profesional-independiente", "campamentos", "fiestas-eventos", "salud-bienestar"].includes(type);
}

function needsCredentials(type: UserTypeId) {
  return ["centro-educativo", "transporte", "salud-bienestar", "campamentos"].includes(type);
}

function needsMinorSafetyNotice(type: UserTypeId, subtype: string) {
  const normalized = subtype.toLowerCase();
  return type === "profesional-independiente" || normalized.includes("canguro") || normalized.includes("profesor") || normalized.includes("particular");
}

export default function LoginRegistration() {
  const [userType, setUserType] = useState<UserTypeId>("familia");
  const current = selectedType(userType);
  const [subtype, setSubtype] = useState(current.subtypes?.[0] ?? "");
  const Icon = typeIcons[userType];
  const showBusinessFields = needsBusinessFields(userType);
  const showAgeAndAvailability = needsAgeAndAvailability(userType);
  const showCredentials = needsCredentials(userType);
  const showMinorSafety = needsMinorSafetyNotice(userType, subtype);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const passwordMismatch = passwordConfirm.length > 0 && password !== passwordConfirm;

  const subtypeOptions = useMemo(() => current.subtypes ?? [], [current]);

  function handleTypeChange(value: UserTypeId) {
    const next = selectedType(value);
    setUserType(value);
    setSubtype(next.subtypes?.[0] ?? "");
  }

  return (
    <div className="page py-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_380px]">
        <div className="rounded-2xl border border-line bg-panel p-5 md:p-8">
          <h1 className="text-3xl font-bold text-ink">Entrar o registrarse</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            El perfil representa a una persona adulta, una entidad o un centro. No se solicitan fotos, horarios personales, clases ni datos identificativos de menores.
          </p>

          <div className="mt-6 rounded-2xl border border-line bg-soft p-4">
            <h2 className="text-base font-bold text-slatecopy">¿Ya tienes cuenta?</h2>
            <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <label className="sr-only" htmlFor="login-email">Email</label>
              <input id="login-email" type="email" className="field m-0 placeholder:text-muted" placeholder="Email" />
              <label className="sr-only" htmlFor="login-password">Contraseña</label>
              <input id="login-password" type="password" className="field m-0 placeholder:text-muted" placeholder="Contraseña" />
              <button className="btn-secondary" type="submit">Entrar</button>
            </form>
          </div>

          <form className="mt-6 grid gap-5">
            <section className="rounded-2xl border border-line bg-white p-4">
              <label className="field-label">
                Tipo de usuario
                <select required className="field" value={userType} onChange={(event) => handleTypeChange(event.target.value as UserTypeId)}>
                  {userTypes.map((type) => <option key={type.id} value={type.id}>{type.label}</option>)}
                </select>
              </label>
              <div className="mt-4 flex gap-3 rounded-2xl bg-soft p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-line"><Icon size={22} aria-hidden /></span>
                <div>
                  <h2 className="text-base font-bold text-slatecopy">{current.label}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted">{current.helper}</p>
                  {showBusinessFields && (
                    <p className="mt-2 text-sm font-semibold leading-6 text-petrol">
                      Revisaremos tu alta antes de activar la cuenta. Te avisaremos por email o teléfono si queda aprobada o necesitamos más información.
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="grid gap-4 rounded-2xl border border-line bg-white p-4 md:grid-cols-2">
              <label className="field-label md:col-span-2">
                {showBusinessFields ? "Nombre público de la entidad o profesional" : "Nombre público del adulto"}
                <input required className="field font-normal placeholder:text-muted" placeholder={showBusinessFields ? "Ej. Academia Norte, Colegio Los Olivos" : "Ej. Marta G."} />
              </label>
              <label className="field-label">Email de contacto<input required type="email" className="field font-normal placeholder:text-muted" placeholder="tu@email.com" /></label>
              <label className="field-label">Teléfono de contacto<input type="tel" className="field font-normal placeholder:text-muted" placeholder="Teléfono de contacto" /></label>
              <label className="field-label">Contraseña<input required type="password" minLength={8} className="field font-normal placeholder:text-muted" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mínimo 8 caracteres" /></label>
              <label className="field-label">
                Confirmar contraseña
                <input required type="password" minLength={8} className="field font-normal placeholder:text-muted" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} aria-invalid={passwordMismatch} placeholder="Repite la contraseña" />
                {passwordMismatch && <span className="mt-2 block text-sm font-semibold text-coral">Las contraseñas no coinciden.</span>}
              </label>
              <label className="field-label">
                Municipio principal
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
            </section>

            {showBusinessFields && (
              <section className="grid gap-4 rounded-2xl border border-line bg-white p-4 md:grid-cols-2">
                <label className="field-label">
                  Tipología
                  <select required className="field" value={subtype} onChange={(event) => setSubtype(event.target.value)}>
                    {subtypeOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label className="field-label">Web o enlace público<input className="field font-normal placeholder:text-muted" placeholder="https://" /></label>
                <label className="field-label md:col-span-2">Descripción breve<textarea required className="field min-h-28 py-3 font-normal placeholder:text-muted" placeholder="Cuenta qué ofreces, para quién y en qué zona trabajas." /></label>
                <label className="field-label">Dirección o zona de servicio<input className="field font-normal placeholder:text-muted" placeholder="Ej. Majadahonda y alrededores" /></label>
                <label className="field-label">Modalidad<select className="field" defaultValue=""><option value="">Selecciona modalidad</option><option>Presencial</option><option>Online</option><option>Presencial y online</option><option>A domicilio</option></select></label>
                {showAgeAndAvailability && (
                  <>
                    <label className="field-label">Edades orientativas<input className="field font-normal placeholder:text-muted" placeholder="Ej. 6-12 años, familias, adultos" /></label>
                    <label className="field-label">Disponibilidad<input className="field font-normal placeholder:text-muted" placeholder="Ej. tardes, fines de semana, vacaciones" /></label>
                    <label className="field-label md:col-span-2">Horarios o franjas<textarea className="field min-h-24 py-3 font-normal placeholder:text-muted" placeholder="Indica horarios de apertura, clases, turnos o disponibilidad sin incluir horarios personales de menores." /></label>
                  </>
                )}
                {showCredentials && (
                  <>
                    <label className="field-label">Licencia, colegiación o autorización aplicable<input className="field font-normal placeholder:text-muted" placeholder="Ej. nº colegiado, autorización, licencia municipal" /></label>
                    <label className="field-label">Seguro o responsable del servicio<input className="field font-normal placeholder:text-muted" placeholder="Ej. entidad responsable, póliza, titular del servicio" /></label>
                  </>
                )}
                <label className="field-label md:col-span-2">Características relevantes<textarea className="field min-h-24 py-3 font-normal placeholder:text-muted" placeholder="Idiomas, grupos reducidos, recogida, necesidades especiales, materiales, ratios, etc." /></label>
              </section>
            )}

            {showMinorSafety && (
              <div className="rounded-2xl border border-sage/30 bg-sage/10 p-4 text-sm leading-6 text-slatecopy">
                <strong className="block text-petrol">Aviso de seguridad para servicios personales</strong>
                En este MVP solo aceptamos altas gestionadas por adultos o entidades responsables. Tenlo no emplea, contrata ni valida laboralmente a canguros o profesores: publica fichas revisadas y facilita el descubrimiento. Si una actividad la realiza una persona menor de edad, no se publicará su perfil ni sus datos de contacto; deberá estar gestionada por una persona adulta responsable y cumplir la normativa aplicable.
              </div>
            )}

            <label className="rounded-xl border border-line bg-soft p-4 text-sm font-semibold leading-6 text-slatecopy">
              <input required type="checkbox" className="mr-2 h-4 w-4 rounded border-line" />
              Confirmo que soy mayor de 18 años o actúo en nombre de una entidad responsable, y que la información no incluye datos personales, fotos ni horarios identificativos de menores.
            </label>
            <button className="btn-primary w-full md:w-fit" type="submit" disabled={passwordMismatch}>Crear cuenta</button>
          </form>
        </div>

        <aside className="rounded-2xl border border-line bg-panel p-5 md:p-6">
          <h2 className="text-xl font-semibold text-ink">Así se verá tu perfil</h2>
          <div className="mt-5 grid gap-3">
            {roleExamples.map(({ title, text, Icon: ExampleIcon, className }) => (
              <div key={title} className="flex items-center gap-3 rounded-xl border border-line bg-soft p-4">
                <span className={`grid h-11 w-11 place-items-center rounded-full ring-1 ${className}`}>
                  <ExampleIcon size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="text-sm font-medium text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            El rol aparecerá en publicaciones, solicitudes y fichas para distinguir familias, profesionales, servicios y centros sin crear perfiles de menores.
          </p>
        </aside>
      </div>
    </div>
  );
}
