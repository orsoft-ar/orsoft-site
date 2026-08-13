import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://orsoft.site";

export const metadata: Metadata = {
  title: "OrSoft | Desarrollo de software a medida para empresas en Villa María, Córdoba",
  description:
    "Desarrollamos software a medida para empresas en Argentina. Aplicaciones web, automatización de procesos y sistemas empresariales. Transformamos tus ideas en soluciones digitales eficientes.",
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "OrSoft — Desarrollo de software a medida para empresas",
    description:
      "Soluciones de software para empresas que buscan crecer. Desarrollo a medida, aplicaciones web, automatización de procesos y más. Basados en Villa María, Córdoba.",
    url: baseUrl,
    siteName: "OrSoft",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "OrSoft — Desarrollo de software a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrSoft — Desarrollo de software a medida para empresas",
    description:
      "Soluciones de software para empresas. Desarrollo a medida, aplicaciones web y automatización en Villa María, Córdoba.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-theme="night"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem("theme");
                if (theme === "night" || theme === "day") {
                  document.documentElement.setAttribute("data-theme", theme);
                } else {
                  document.documentElement.setAttribute("data-theme", "night");
                }
              })();
            `,
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HPTTHGDPVV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HPTTHGDPVV');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${baseUrl}/#organization`,
                  name: "OrSoft",
                  url: baseUrl,
                  logo: `${baseUrl}/logo.png`,
                  description:
                    "Desarrollo de software a medida para empresas. Aplicaciones web, automatización de procesos y sistemas empresariales.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa María",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "mgerbaudo02@gmail.com",
                    contactType: "sales",
                    availableLanguage: ["Spanish"],
                  },
                  sameAs: [
                    "https://www.linkedin.com/in/mateo-gerbaudo-645279211/",
                    "https://instagram.com/orsoft.site",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": `${baseUrl}/#local-business`,
                  parentOrganization: { "@id": `${baseUrl}/#organization` },
                  name: "OrSoft",
                  description:
                    "Desarrollo de software a medida para empresas en Villa María, Córdoba.",
                  url: baseUrl,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa María",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  email: "mgerbaudo02@gmail.com",
                  priceRange: "$$",
                },
                {
                  "@type": "WebApplication",
                  "@id": "https://linkorsoft.site/#app",
                  name: "LinkOrSoft",
                  url: "https://linkorsoft.site",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  description:
                    "Herramienta gratuita de links in bio. Reuní tus redes, tu WhatsApp y tu portfolio en una página personalizada con una URL única, ideal para tu bio de Instagram, TikTok, LinkedIn o YouTube.",
                },
                {
                  "@type": "FAQPage",
                  "@id": `${baseUrl}/#faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "¿Qué tipo de soluciones desarrolla OrSoft?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Desarrollamos software a medida, aplicaciones web empresariales, sistemas de automatización y soluciones de integración entre plataformas. Cada proyecto se adapta a las necesidades específicas del cliente.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Trabajan con empresas pequeñas y medianas?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí. Trabajamos con organizaciones de diversos tamaños y sectores. Nuestro enfoque se adapta tanto a empresas que dan sus primeros pasos en digitalización como a aquellas que buscan optimizar procesos existentes.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Pueden mejorar sistemas existentes?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Por supuesto. Analizamos el sistema actual, identificamos oportunidades de mejora y proponemos un plan de evolución que puede incluir nuevas funcionalidades, mejoras de rendimiento o migraciones tecnológicas.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Cómo comienza un proyecto?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "El proceso comienza con una reunión para entender el desafío y los objetivos del negocio. A partir de ahí, realizamos un análisis y presentamos una propuesta con el alcance, la estrategia y los tiempos estimados.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Ofrecen soporte después de la implementación?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí. Acompañamos a nuestros clientes durante toda la vida del software, realizando mantenimiento, mejoras y ajustes según las necesidades que surjan con el tiempo.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
