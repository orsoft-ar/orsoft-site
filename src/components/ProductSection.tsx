"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link2Icon, PaletteIcon, SmartphoneIcon, CheckIcon, TrendingIcon } from "./Icons";

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
  { icon: Link2Icon, title: "Un solo link", desc: "Todas tus redes y tu portfolio en una única URL para compartir." },
  { icon: PaletteIcon, title: "Perfil personalizado", desc: "Tu foto, tu nombre y tu descripción. Tu página con tu identidad." },
  { icon: SmartphoneIcon, title: "Se ve como una app", desc: "Diseño limpio que se ve perfecto en el teléfono de quien te visita." },
  { icon: TrendingIcon, title: "Links ilimitados", desc: "Agregá y organizá todos los enlaces que quieras, gratis y sin tarjeta." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProductSection() {
  return (
    <section id="herramienta" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-accent/30 bg-violet-accent/5 text-sm font-medium text-violet-accent mb-5">
            <CheckIcon className="w-4 h-4" />
            Nuestra herramienta
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            LinkOrSoft: todos tus links{" "}
            <span className="text-violet-accent">en un solo lugar</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            LinkOrSoft es una herramienta gratuita de <strong className="text-foreground">links in bio</strong>.
            Reuní tus redes, tu WhatsApp, tu portfolio y tu contacto en una página
            personalizada con una URL única, ideal para tu bio de Instagram, TikTok,
            LinkedIn o YouTube.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xs"
          >
            <div className="relative rounded-[2.5rem] border-[6px] border-violet-accent/30 bg-[var(--section-alt)] p-8 overflow-hidden">
              <div className="flex flex-col items-center text-center mb-6">
                <Image
                  src="/logoLinkOrsoft.png"
                  alt="LinkOrSoft"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-3 font-semibold">Tu marca</h3>
                <p className="text-sm text-foreground/60">
                  Tu biografía en una línea
                </p>
              </div>
              <div className="space-y-2.5">
                {["Instagram", "WhatsApp", "Portfolio", "LinkedIn", "Email"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center justify-center rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] px-4 py-2.5 text-sm font-medium"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-4 -top-3 hidden sm:block px-4 py-2 rounded-2xl bg-violet-accent/10 border border-violet-accent/30 text-xs font-medium text-violet-accent">
              linkorsoft.site/tu-nombre
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              ¿Para qué sirve LinkOrSoft?
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Hoy las redes te limitan a <strong className="text-foreground">un solo link en tu bio</strong>.
              LinkOrSoft te permite mostrar todo lo que hacés desde un único enlace:
              tus redes sociales, tu sitio web, tu portfolio, tu WhatsApp y tu contacto,
              todo ordenado en una página que se ve como una app.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  className="p-5 rounded-xl glass-card hover:border-violet-accent/30 hover:bg-violet-accent/[0.03] transition-all"
                >
                  <b.icon className="w-6 h-6 text-violet-accent mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{b.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.number}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  className="p-5 rounded-xl border border-violet-accent/10 bg-violet-accent/[0.02] hover:border-violet-accent/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-violet-accent/10 flex items-center justify-center mb-3 text-violet-accent font-bold">
                    {s.number}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://linkorsoft.site/register"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-violet text-white font-medium hover:bg-violet-dark transition-all hover:shadow-lg hover:shadow-violet-accent/25"
              >
                Crear mi página gratis
              </a>
              <a
                href="https://linkorsoft.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-[var(--input-border)] text-foreground/80 hover:border-violet-accent/50 hover:text-violet-accent transition-colors"
              >
                Conocer más
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
