import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Tenlo",
  description: "Información sobre el uso de cookies en la plataforma Tenlo."
};

export default function CookiesPolicyPage() {
  return (
    <div className="section-shell max-w-4xl">
      <h1 className="page-title">Política de Cookies</h1>
      <p className="lead mt-4">Tenlo utiliza cookies para mejorar tu experiencia de navegación y ofrecerte un servicio más personalizado y seguro.</p>

      <div className="mt-10 space-y-10 text-sm leading-7 text-slatecopy">
        <section>
          <h2 className="text-xl font-bold text-ink">¿Qué son las cookies?</h2>
          <p className="mt-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas casi cualquier página web. Su utilidad es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Cookies utilizadas en Tenlo</h2>
          <ul className="mt-4 list-disc pl-5 space-y-3">
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la plataforma (sesión, seguridad).</li>
            <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la plataforma.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Cómo gestionar las cookies</h2>
          <p className="mt-4">
            Puedes restringir, bloquear o borrar las cookies de Tenlo (o de cualquier otro sitio web) utilizando tu navegador. Cada navegador tiene una operativa diferente, consulta la ayuda de tu navegador para saber cómo hacerlo.
          </p>
        </section>
      </div>
    </div>
  );
}
