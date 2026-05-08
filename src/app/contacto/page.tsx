import ContactForm from "@/components/ContactForm";
import LegalPage from "@/components/LegalPage";

export default function ContactPage() {
  return (
    <LegalPage title="Contacto">
      <p>Cuéntanos qué necesitas y te responderemos desde el equipo de Tenlo. Este formulario está dirigido exclusivamente a personas adultas.</p>
      <ContactForm />
    </LegalPage>
  );
}
