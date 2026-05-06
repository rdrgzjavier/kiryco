import CenterCard from "@/components/CenterCard";
import { centers } from "@/lib/mock-data";
export default function CentrosPage() { return <div className="page-container py-10"><h1 className="mb-4">Centros educativos en tu zona</h1><p className="alert-info mb-8">Las valoraciones están moderadas y buscan ayudar con información útil y respetuosa.</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{centers.map((c) => <CenterCard key={c.id} center={c} />)}</div></div>; }
