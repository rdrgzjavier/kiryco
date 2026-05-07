import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiryco.es"),
  title: { default: "Kiryco | Todo alrededor del colegio cerca de ti", template: "%s | Kiryco" },
  description: "Encuentra uniformes, libros, clases particulares, canguros, extraescolares y centros educativos filtrados por zona y centro.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Kiryco | Todo alrededor del colegio cerca de ti",
    description: "Recursos útiles alrededor del colegio, filtrados por zona, centro y categoría.",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Kiryco" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className="min-h-screen flex flex-col"><Header /><main className="flex-1">{children}</main><Footer /></body></html>;
}
