"use client";

import { useState } from "react";
import Avatar from "@/components/Avatar";
import { centers, municipalities } from "@/lib/mock-data";

type Status = "idle" | "sending" | "sent" | "error";

const roles = [
  { value: "family", label: "Familia" },
  { value: "provider", label: "Servicio profesional" },
  { value: "center", label: "Centro educativo" },
  { value: "admin", label: "Administrador" }
];

export default function LoginPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [mode, setMode] = useState<"login" | "register">("register");

  async function register(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setStatus(response.ok ? "sent" : "error");
  }

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sent");
  }

  return (
    <div className="page py-10">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-line bg-panel p-5 md:p-8">
          <p className="label">Solo adultos</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">Entrar o registrarse</h1>
          <p className="mt-3 text-sm leading-6 text-muted">El perfil representa a un adulto, un servicio profesional o un centro. No se solicitan nombres, clases, fotos ni horarios personales de menores.</p>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-soft p-1">
            <button className={mode === "register" ? "btn-primary" : "btn-secondary"} type="button" onClick={() => setMode("register")}>Crear cuenta</button>
            <button className={mode === "login" ? "btn-primary" : "btn-secondary"} type="button" onClick={() => setMode("login")}>Ya tengo cuenta</button>
          </div>

          {mode === "login" ? (
            <form className="mt-6 grid gap-4" onSubmit={login} noValidate={false}>
              <label className="field-label">Email o usuario<input name="login" required className="field" autoComplete="username" /></label>
              <label className="field-label">Contraseña<input name="password" required type="password" className="field" autoComplete="current-password" /></label>
              <button className="btn-primary" type="submit">Entrar</button>
            </form>
          ) : (
            <form className="mt-6 grid gap-4" onSubmit={register} noValidate={false}>
              <label className="field-label">Nombre público del adulto o entidad<input name="name" required className="field" placeholder="Ej. Marta, Academia Norte, Colegio Los Olivos" /></label>
              <label className="field-label">Email<input name="email" required type="email" className="field" autoComplete="email" /></label>
              <label className="field-label">Contraseña<input name="password" required type="password" minLength={10} pattern="(?=.*[A-Za-z])(?=.*\d).{10,}" className="field" autoComplete="new-password" aria-describedby="password-help" /></label>
              <p id="password-help" className="-mt-2 text-xs leading-5 text-muted">Mínimo 10 caracteres, con letras y números.</p>
              <label className="field-label">Teléfono opcional<input name="phone" type="tel" className="field" /></label>
              <label className="field-label">Imagen de perfil opcional<input name="image" type="file" accept="image/*" className="field cursor-pointer py-2" /></label>
              <p className="-mt-2 text-xs leading-5 text-muted">Si no subes imagen, Tenlo asignará un color y la inicial del nombre. No subir fotos de menores.</p>
              <label className="field-label">Municipio<select name="municipality" required className="field" defaultValue=""><option value="" disabled>Selecciona municipio</option>{municipalities.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
              <label className="field-label">Centro relacionado opcional<select name="center" className="field" defaultValue=""><option value="">No indicado</option>{centers.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
              <label className="field-label">Tipo de usuario<select name="role" required className="field" defaultValue=""><option value="" disabled>Selecciona tipo de usuario</option>{roles.map((role) => <option key={role.value} value={role.label}>{role.label}</option>)}</select></label>
              <button className="btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando..." : "Continuar"}</button>
            </form>
          )}

          {status === "sent" ? <p className="mt-4 rounded-xl border border-line bg-soft p-4 text-sm font-semibold text-slatecopy">Solicitud recibida. Cuando conectemos la base de datos y el proveedor de email, quedará registrada y se enviarán las notificaciones automáticamente.</p> : null}
          {status === "error" ? <p className="mt-4 rounded-xl border border-coral bg-soft p-4 text-sm font-semibold text-ink">No se ha podido completar el envío. Revisa los campos o inténtalo más tarde.</p> : null}
        </div>
        <aside className="rounded-2xl border border-line bg-panel p-5 md:p-6">
          <h2 className="text-xl font-semibold text-ink">Así se verá tu perfil</h2>
          <div className="mt-5 rounded-xl border border-line bg-soft p-4"><Avatar name="Marta" role="family" /></div>
          <div className="mt-3 rounded-xl border border-line bg-soft p-4"><Avatar name="Academia Norte" role="provider" /></div>
          <div className="mt-3 rounded-xl border border-line bg-soft p-4"><Avatar name="Centro Los Olivos" role="center" /></div>
          <div className="mt-3 rounded-xl border border-line bg-soft p-4"><Avatar name="Administrador Tenlo" role="admin" /></div>
          <p className="mt-5 text-sm leading-6 text-muted">Roles actuales: Familia, Servicio profesional, Centro educativo y Administrador. Los profesores, canguros, librerías, tiendas de uniformes y actividades extraescolares entran como Servicio profesional.</p>
        </aside>
      </div>
    </div>
  );
}
