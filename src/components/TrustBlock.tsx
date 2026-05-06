import { EyeOff, MessageSquareOff, Shield, UserCheck } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Sin perfiles de menores",
    description: "La plataforma está dirigida exclusivamente a adultos. No pedimos nombres, fotos, clases ni horarios personales de menores.",
  },
  {
    icon: Shield,
    title: "Publicaciones moderadas",
    description: "Los anuncios, reseñas y entradas del tablón pasan por revisión antes de ser visibles.",
  },
  {
    icon: MessageSquareOff,
    title: "Reseñas respetuosas",
    description: "Las valoraciones de centros son estructuradas y no permiten ataques personales ni opiniones sobre profesores concretos.",
  },
  {
    icon: UserCheck,
    title: "Proveedores verificables",
    description: "Los profesionales pueden solicitar verificación y mostrar datos claros de zona, servicio y contacto.",
  },
];

export default function TrustBlock() {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand-900">Pensado para familias. Diseñado con privacidad.</h2>
        <p className="text-lg leading-relaxed text-warm-700">
          Una plataforma local para padres, madres, tutores legales, centros y proveedores. Útil para organizar el día a día sin exponer datos de menores.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-lg border border-warm-200 bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-warm-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-warm-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
