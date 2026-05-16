import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: {
    default: "Tenlo | Servicios, centros y recursos para familias en Madrid noroeste",
    template: "%s | Tenlo"
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: [
      { url: "/brand/tenlo-isotipo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/tenlo-isotipo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/tenlo-isotipo-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: [{ url: "/brand/tenlo-isotipo-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/tenlo-isotipo-180.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Tenlo | Servicios, centros y recursos para familias en Madrid noroeste",
    description: siteConfig.description,
    images: [{ url: "/brand/tenlo-isotipo-512.png", width: 512, height: 512, alt: "Tenlo" }]
  },
  twitter: {
    card: "summary",
    title: "Tenlo | Servicios, centros y recursos para familias en Madrid noroeste",
    description: siteConfig.description,
    images: ["/brand/tenlo-isotipo-512.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: absoluteUrl("/brand/tenlo-isotipo-512.png"),
    description: siteConfig.shortDescription,
    areaServed: siteConfig.municipalities.map((name) => ({
      "@type": "City",
      name
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.shortDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/buscar?tag={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="es">
      <head>
        <Script id="gtm-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'granted','security_storage':'granted'});`}
        </Script>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NCVMLXWZ');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCVMLXWZ" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        <Header />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
