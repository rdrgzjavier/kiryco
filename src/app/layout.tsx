import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiryco.es"),
  title: { default: "Proyecto Familias | Todo alrededor del colegio cerca de ti", template: "%s | Proyecto Familias" },
  description: "Encuentra uniformes, libros, clases particulares, canguros, extraescolares y centros educativos filtrados por zona y centro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className="min-h-screen flex flex-col"><Header /><main className="flex-1">{children}</main><Footer /></body></html>;
}
