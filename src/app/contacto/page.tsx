import LegalPage from "@/components/LegalPage";

export default function ContactPage() {
  return (
    <LegalPage title="Contacto">
      <p>Formulario placeholder para contactar con el equipo de Proyecto Familias.</p>
      <form className="grid gap-4">
        <label className="field-label">Nombre del adulto<input className="field" required /></label>
        <label className="field-label">Email<input className="field" type="email" required /></label>
        <label className="field-label">Mensaje<textarea className="field min-h-28" required /></label>
        <button className="btn-primary w-fit">Enviar</button>
      </form>
    </LegalPage>
  );
}
