import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "LinkOrSoft | Creá gratis tu página de links in bio para Instagram, TikTok y más",
  description:
    "LinkOrSoft es la herramienta gratuita de links in bio creada por OrSoft. Reuní tus redes, tu WhatsApp y tu portfolio en una URL única: linkorsoft.site/tu-nombre. Sin tarjeta y sin límites.",
  alternates: {
    canonical: "https://orsoft.site/linkorsoft",
  },
  openGraph: {
    title: "LinkOrSoft — Todos tus links en un solo lugar",
    description:
      "Creá gratis tu página personalizada y compartí desde un único link todo lo que hacés: Instagram, WhatsApp, LinkedIn y más.",
    url: "https://orsoft.site/linkorsoft",
    siteName: "OrSoft",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const steps = [
  {
    number: "1",
    title: "Creá tu cuenta",
    desc: "Registrate gratis y elegí tu nombre de usuario. Tu URL única se reserva al instante.",
  },
  {
    number: "2",
    title: "Sumá tus links",
    desc: "Agregá tus redes, tu WhatsApp, tu portfolio y todo lo que quieras mostrar.",
  },
  {
    number: "3",
    title: "Compartí",
    desc: "Poné tu link en tu bio y listo. Actualizá los enlaces cuando quieras.",
  },
];

const benefits = [
  {
    title: "Un solo link",
    desc: "Compartí un único enlace que muestra todos tus destinos: portafolio, redes, proyectos y más.",
  },
  {
    title: "Perfil personalizado",
    desc: "Tu foto, tu nombre y tu descripción. Tu página con tu identidad.",
  },
  {
    title: "Se ve como una app",
    desc: "Diseño limpio y moderno que se ve perfecto en el teléfono de quien te visita.",
  },
  {
    title: "Links ilimitados",
    desc: "Agregá y organizá todos los enlaces que quieras, actualizables cuando quieras.",
  },
  {
    title: "Fácil de actualizar",
    desc: "Cambiá, ordená o desactivá tus enlaces en segundos desde tu panel.",
  },
  {
    title: "Sin límites ni costos",
    desc: "Completá tu página gratis y empezá a compartirla hoy mismo. No hace falta tarjeta.",
  },
];

const faqs = [
  {
    q: "¿Qué es LinkOrSoft?",
    a: "Es una página personalizada y gratis donde reunís todos tus links: Instagram, WhatsApp, LinkedIn, tu portafolio y más, en un único enlace para compartir.",
  },
  {
    q: "¿Es gratis?",
    a: "Sí. Podés crear tu página de links sin costo, sin tarjeta y sin límites en la versión gratuita.",
  },
  {
    q: "¿Puedo usar mi propia URL?",
    a: "Sí, cada perfil tiene una URL única, por ejemplo linkorsoft.site/tu-nombre, que podés poner en tu bio de Instagram, TikTok, WhatsApp o LinkedIn.",
  },
  {
    q: "¿Cuánto tarda en crear mi página?",
    a: "Menos de un minuto. Creás tu cuenta, elegís tu nombre de usuario y tus links, y listo.",
  },
];

export default function LinkOrSoftPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 px-6 hero-gradient overflow-hidden">
          <div className="absolute inset-0 hero-grid pointer-events-none" />
          <div className="relative max-w-4xl mx-auto text-center">
            <Image
              src="/logoLinkOrsoft.png"
              alt="LinkOrSoft"
              width={96}
              height={96}
              className="rounded-full object-cover mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Todos tus links en{" "}
              <span className="text-violet-accent">un solo lugar</span>
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              LinkOrSoft es la herramienta{" "}
              <strong className="text-foreground">links in bio</strong> creada por OrSoft.
              Creá en menos de un minuto tu página personalizada y compartí desde un
              único link todo lo que hacés: tus redes, tu portfolio y tu contacto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://linkorsoft.site/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-violet text-white font-medium hover:bg-violet-dark transition-all"
              >
                Crear mi página gratis
              </a>
              <a
                href="https://linkorsoft.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-[var(--input-border)] text-foreground/80 hover:border-violet-accent/50 hover:text-violet-accent transition-colors"
              >
                Ver linkorsoft.site
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Para qué sirve LinkOrSoft?
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Las redes sociales te limitan a un solo link en tu bio. LinkOrSoft te
                permite mostrar todo lo que hacés desde un único enlace: tus redes, tu
                sitio web, tu portfolio y tu contacto. Ideal para tu bio de Instagram,
                TikTok, WhatsApp, LinkedIn y YouTube.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-6 rounded-2xl glass-card hover:border-violet-accent/30 hover:bg-violet-accent/[0.03] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-accent/10 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 rounded-full bg-violet-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[var(--section-alt)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Listo en <span className="text-violet-accent">3 pasos</span>
              </h2>
              <p className="text-foreground/60">
                Sin conocimientos técnicos y en menos de un minuto.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className="text-center p-6 rounded-2xl border border-violet-accent/10 bg-violet-accent/[0.02] hover:border-violet-accent/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-violet-accent/10 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-violet-accent">
                    {s.number}
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Preguntas <span className="text-violet-accent">frecuentes</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-[var(--input-border)] hover:border-foreground/30 transition-colors overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 font-medium text-sm list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 text-foreground/40 transition-transform group-open:rotate-180 text-violet-accent"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-4 text-sm text-foreground/60 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href="https://linkorsoft.site/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-violet text-white font-medium hover:bg-violet-dark transition-all inline-block"
              >
                Crear mi página gratis
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}