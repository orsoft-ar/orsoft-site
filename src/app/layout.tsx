import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
      </body>
    </html>
  );
}
