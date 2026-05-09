import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Bus,
  CheckCircle2,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  MapPinned,
  Monitor,
  PartyPopper,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  WalletCards
} from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";
import ImageWithFallback from "@/components/ImageWithFallback";
import { listings, municipalities } from "@/lib/mock-data";
import { formatStat, getSiteStats } from "@/lib/site-stats";

const heroImage = "https://images.pexels.com/photos/9506920/pexels-photo-9506920.jpeg?auto=compress&cs=tinysrgb&w=1200";

const benefits = [
  { title: "Servicios verificados", text: "Calidad y confianza", Icon: ShieldCheck, color: "text-petrol" },
  { title: "Valoraciones reales", text: "De otras familias", Icon: Star, color: "text-sage" },
  { title: "Reserva online", text: "Rápido y seguro", Icon: WalletCards, color: "text-ink" },
  { title: "Todo en un lugar", text: "Ahorra tiempo", Icon: Heart, color: "text-coral" }
];

const homeCategories = [
  { name: "Apoyo escolar", href: "/categoria/clases-particulares", Icon: BookOpen, color: "text-ink" },
  { name: "Actividades extraescolares", href: "/categoria/extraescolares", Icon: Sparkles, color: "text-coral" },
  { name: "Salud y bienestar", href: "/servicios", Icon: Heart, color: "text-sage" },
  { name: "Tecnología y clases online", href: "/buscar?tag=tecnologia", Icon: Monitor, color: "text-ink" },
  { name: "Transporte escolar", href: "/buscar?tag=transporte", Icon: Bus, color: "text-petrol" },
  { name: "Campamentos y vacaciones", href: "/categoria/extraescolares", Icon: Sparkles, color: "text-ink" },
  { name: "Fiestas y eventos", href: "/buscar?tag=cumpleaños", Icon: PartyPopper, color: "text-coral" }
];

const audienceCards = [
  {
    title: "Familias",
    text: "Encuentra y compara recursos locales sin navegar entre decenas de webs.",
    href: "/buscar",
    Icon: UsersRound
  },
  {
    title: "Profesionales",
    text: "Da visibilidad a tu negocio y conecta con familias que ya te necesitan.",
    href: "/proveedores",
    Icon: BriefcaseBusiness
  },
  {
    title: "Centros educativos",
    text: "Ordena recursos útiles alrededor del centro y mejora la experiencia familiar.",
    href: "/centros",
    Icon: GraduationCap
  }
];

const popularServices = [
  {
    title: "Refuerzo de Matemáticas",
    provider: "Academic Madrid",
    category: "Apoyo escolar",
    rating: "4,9 (128)",
    zone: "Majadahonda",
    href: "/categoria/clases-particulares",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Fútbol extraescolar",
    provider: "Campus Sport",
    category: "Actividades",
    rating: "4,8 (96)",
    zone: "Las Rozas",
    href: "/categoria/extraescolares",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Programación online",
    provider: "Codey School",
    category: "Tecnología",
    rating: "4,9 (64)",
    zone: "Pozuelo",
    href: "/buscar?tag=tecnologia",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Inglés dinámico",
    provider: "Kids & Us",
    category: "Inglés",
    rating: "4,7 (88)",
    zone: "Boadilla",
    href: "/categoria/clases-particulares",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85"
  }
];

const steps = [
  ["Cuéntanos qué necesitas", "Elige categoría, zona y el tipo de ayuda que estás buscando."],
  ["Explora opciones fiables", "Compara servicios, centros y recursos ya organizados para tu zona."],
  ["Guarda y contacta", "Marca favoritos o abre el detalle para continuar cuando quieras."],
  ["Construimos contigo", "El directorio crece con aportaciones revisadas y criterios seguros."]
];

export default function Home() {
  const stats = getSiteStats();
  const totalPublished = listings.filter((listing) => listing.status === "published").length;
  const statCards = [
    { value: `+${formatStat(stats.centers)}`, label: "Centros educativos", Icon: GraduationCap },
    { value: `+${formatStat(Math.max(stats.localResources, totalPublished))}`, label: "Recursos locales", Icon: MapPinned },
    { value: `+${formatStat(stats.families)}`, label: "Familias activas", Icon: UsersRound },
    { value: "100%", label: "Moderado y seguro", Icon: ShieldCheck }
  ];

  return (
    <>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(91,77,255,0.14),transparent_32%),linear-gradient(180deg,#ffffff_0%,#F7F5F2_100%)]">
        <div className="page grid gap-8 py-10 lg:grid-cols-[1fr_0.9fr] lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="chip w-fit">Todo lo que necesitas alrededor de la etapa educativa, en un solo lugar</p>
            <h1 className="page-title mt-6 max-w-3xl">Encuentra, compara y reserva servicios para tu familia</h1>
            <p className="lead">Actividades, apoyo escolar, salud, tecnología, transporte y mucho más. Información organizada por zona, sin datos identificativos de menores.</p>
            <form action="/buscar" className="mt-8 grid gap-3 rounded-[24px] bg-panel p-3 shadow-soft sm:grid-cols-[1fr_0.72fr_auto]">
              <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-4 ring-1 ring-line">
                <Search size={20} className="text-muted" aria-hidden />
                <span className="sr-only">Servicio</span>
                <input name="tag" placeholder="¿Qué servicio buscas?" className="w-full bg-transparent text-sm outline-none" />
              </label>
              <label className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-4 ring-1 ring-line">
                <MapPin size={20} className="text-muted" aria-hidden />
                <span className="sr-only">Zona</span>
                <select name="municipio" className="w-full bg-transparent text-sm text-muted outline-none">
                  <option value="">¿Dónde?</option>
                  {municipalities.map((municipality) => <option key={municipality.id} value={municipality.name}>{municipality.name}</option>)}
                </select>
              </label>
              <button className="btn-primary min-w-40" type="submit">Buscar servicios</button>
            </form>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {benefits.map(({ title, text, Icon, color }) => (
                <div key={title} className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm"><Icon size={18} className={color} aria-hidden /></span>
                  <span className="min-w-0"><strong className="block whitespace-nowrap text-[11px] text-slatecopy">{title}</strong><span className="block whitespace-nowrap text-[11px] text-muted">{text}</span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[400px] lg:block">
            <div className="absolute inset-x-8 bottom-0 top-4 overflow-hidden rounded-[44px] bg-lavender shadow-lift">
              <ImageWithFallback src={heroImage} fallbackSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Manos de una persona adulta y un menor caminando, sin rostros visibles" className="h-full w-full object-cover object-center" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/12 via-transparent to-transparent" />
            </div>
            <span className="chip absolute right-12 top-8 bg-white/90 shadow-soft">De 1 a 18 años</span>
          </div>
        </div>
      </section>

      <section className="page relative z-10 -mt-6">
        <div className="card grid gap-4 p-5 shadow-soft sm:grid-cols-4 lg:grid-cols-[repeat(7,1fr)_0.75fr]">
          {homeCategories.map(({ name, href, Icon, color }) => (
            <Link key={name} href={href} className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-2xl p-3 text-center text-sm font-bold text-slatecopy transition-colors hover:bg-soft hover:text-ink">
              <Icon size={26} className={color} aria-hidden />
              <span>{name}</span>
            </Link>
          ))}
          <Link href="/categoria" className="flex min-h-24 flex-col items-center justify-center gap-2 border-l border-line p-3 text-center text-sm font-bold text-ink">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-lavender"><ArrowRight size={24} aria-hidden /></span>
            <span>Ver todos</span>
          </Link>
        </div>
      </section>

      <section className="page py-16">
        <div className="grid gap-px overflow-hidden rounded-[24px] bg-line bg-gradient-to-r from-lavender via-white to-lavender p-px shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map(({ value, label, Icon }) => (
            <div key={label} className="bg-white/80 p-8 text-center">
              <Icon size={30} className="mx-auto text-ink" aria-hidden />
              <p className="mt-4 text-3xl font-extrabold text-slatecopy">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page pb-16">
        <h2 className="section-title text-center">Para quién está destinado Tenlo</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {audienceCards.map(({ title, text, href, Icon }) => (
            <article key={title} className="card p-7">
              <Icon size={32} className="text-slatecopy" aria-hidden />
              <h3 className="mt-5 text-lg font-bold text-slatecopy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              <Link href={href} className="btn-secondary mt-5">Más información</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="section-title">Servicios populares en tu zona</h2>
          <Link href="/servicios" className="font-bold text-ink">Ver todos</Link>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {popularServices.map((service) => (
            <article key={service.title} className="card min-w-[270px] overflow-hidden lg:min-w-0">
              <Link href={service.href} aria-label={`Ver ${service.title}`}>
                <ImageWithFallback src={service.image} fallbackSrc={heroImage} alt={`Imagen de ${service.title}`} className="h-36 w-full object-cover" />
              </Link>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="chip">{service.category}</span>
                  <FavoriteButton className="icon-button h-9 w-9 rounded-xl" label={`Guardar ${service.title}`} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slatecopy"><Link href={service.href}>{service.title}</Link></h3>
                <p className="mt-1 text-sm text-muted">{service.provider}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span className="inline-flex items-center gap-1"><Star size={16} className="fill-coral text-coral" aria-hidden />{service.rating}</span>
                  <span className="inline-flex items-center gap-1"><MapPin size={15} aria-hidden />{service.zone}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page grid gap-8 pb-16 lg:grid-cols-[0.72fr_1fr]">
        <div className="flex flex-col justify-center">
          <MapPinned size={34} className="text-petrol" aria-hidden />
          <h2 className="mt-5 text-2xl font-bold text-slatecopy">Empezamos por el Noroeste de Madrid</h2>
          <p className="mt-4 text-sm leading-7 text-muted">Para ofrecerte una experiencia local, iniciamos cobertura en las principales localidades del Noroeste de Madrid.</p>
          <Link href="/zona/las-rozas" className="btn-secondary mt-6 w-fit">Ver todas las zonas</Link>
        </div>
        <div className="card relative min-h-[320px] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#F3F0FF_48%,#F8F7F4_100%)] p-8">
          <div className="absolute inset-6 rounded-[32px] border border-white/70 bg-white/45" />
          <div className="absolute left-12 top-10 h-40 w-40 rounded-full border border-ink/10" />
          <div className="absolute bottom-8 right-12 h-52 w-52 rounded-full border border-petrol/15" />
          <div className="absolute left-[28%] top-[22%] h-32 w-44 rotate-[-12deg] rounded-[48%_52%_45%_55%] bg-ink/10 ring-1 ring-ink/15" />
          <div className="relative grid min-h-[250px] place-items-center">
            <div className="rounded-full bg-white px-5 py-3 text-center shadow-soft ring-1 ring-line">
              <p className="text-xs font-bold uppercase tracking-[0.05em] text-muted">Cobertura inicial</p>
              <p className="text-lg font-extrabold text-ink">Noroeste de Madrid</p>
            </div>
            <div className="absolute left-6 top-8 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slatecopy shadow-soft"><MapPin size={15} className="mb-1 text-ink" />Las Rozas</div>
            <div className="absolute right-6 top-10 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slatecopy shadow-soft"><MapPin size={15} className="mb-1 text-ink" />Pozuelo</div>
            <div className="absolute bottom-10 left-12 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slatecopy shadow-soft"><MapPin size={15} className="mb-1 text-ink" />Majadahonda</div>
            <div className="absolute bottom-8 right-10 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slatecopy shadow-soft"><MapPin size={15} className="mb-1 text-ink" />Boadilla</div>
          </div>
        </div>
      </section>

      <section className="page pb-16">
        <div className="grid items-center gap-6 rounded-[24px] bg-lavender p-8 shadow-soft md:grid-cols-[1fr_auto] md:p-10">
          <div className="flex items-center gap-5">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/70"><BriefcaseBusiness size={34} className="text-slatecopy" /></span>
            <div>
              <h2 className="text-2xl font-bold text-slatecopy">¿Quieres formar parte de Tenlo?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Únete como profesional o centro y forma parte del directorio de confianza para familias.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <Link href="/publicar" className="btn-primary">Quiero unirme</Link>
            <Link href="/proveedores" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-ink">Más información <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="page pb-16">
        <h2 className="section-title text-center">Cómo funciona Tenlo</h2>
        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-line bg-panel shadow-soft lg:grid-cols-[0.9fr_1.4fr]">
          <div className="bg-ink p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/60">Onboarding</p>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight">Empieza con una necesidad concreta</h3>
            <p className="mt-4 text-sm leading-7 text-white/72">Tenlo no te pide crear perfiles de menores. Entras desde una necesidad familiar, comparas opciones locales y decides qué guardar o contactar.</p>
            <Link href="/buscar" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-ink">Empezar a buscar <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            {steps.map(([title, text], index) => (
              <article key={title} className="border-line p-7 md:border-l md:[&:nth-child(n+3)]:border-t">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender text-sm font-extrabold text-ink">{index + 1}</span>
                <h3 className="mt-5 font-bold text-slatecopy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page pb-16">
        <div className="card grid gap-8 bg-[linear-gradient(90deg,#ffffff,#F3FAF7)] p-8 md:grid-cols-[0.9fr_1.4fr] md:items-center md:p-10">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-petrol shadow-sm"><ShieldCheck size={24} aria-hidden /></span>
            <div>
              <h2 className="text-2xl font-bold text-slatecopy">Privacidad desde el inicio</h2>
              <p className="mt-3 text-sm leading-7 text-muted">La privacidad y seguridad de las familias es nuestra prioridad. No publicamos fotos, perfiles, horarios personales ni datos sensibles de menores.</p>
              <Link href="/privacidad" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink">Saber más <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {["Perfiles verificados y moderados", "Datos protegidos bajo estándares altos", "Entorno seguro para toda la familia"].map((item) => (
              <div key={item} className="flex flex-col items-center justify-center gap-3 text-center text-sm font-semibold leading-6 text-muted">
                <CheckCircle2 size={22} className="shrink-0 text-petrol" aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page pb-16">
        <div className="grid items-center gap-6 rounded-[24px] bg-lavender p-8 shadow-soft md:grid-cols-[1fr_auto] md:p-10">
          <div className="flex items-center gap-5">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/70"><Mail size={34} className="text-slatecopy" /></span>
            <div>
              <h2 className="text-2xl font-bold text-slatecopy">¿Quieres estar al día?</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Recibe novedades, recursos y recomendaciones pensadas para familias como la tuya.</p>
            </div>
          </div>
          <form action="/contacto" className="grid min-w-[min(100%,460px)] gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="newsletter-email">Tu correo electrónico</label>
            <input id="newsletter-email" name="email" type="email" placeholder="Tu correo electrónico" className="field m-0 bg-white" />
            <button className="btn-primary" type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </>
  );
}
