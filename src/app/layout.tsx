import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/InstallPrompt";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Tenlo | Todo alrededor del colegio cerca de ti",
  description: "Encuentra uniformes, libros, clases particulares, canguros, extraescolares y centros educativos filtrados por zona y centro.",
  metadataBase: new URL("https://tenlo.es"),
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
    title: "Tenlo | Todo alrededor del colegio cerca de ti",
    description: "Recursos útiles alrededor del colegio, filtrados por zona, centro y categoría.",
    images: [{ url: "/brand/tenlo-isotipo-1024.png", width: 1024, height: 1024, alt: "Tenlo" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NCVMLXWZ');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCVMLXWZ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <InstallPrompt />
      </body>
    </html>
  );
}
