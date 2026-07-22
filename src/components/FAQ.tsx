"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Qué tipo de soluciones desarrolla OrSoft?",
    a: "Desarrollamos software a medida, aplicaciones web empresariales, sistemas de automatización y soluciones de integración entre plataformas. Cada proyecto se adapta a las necesidades específicas del cliente.",
  },
  {
    q: "¿Trabajan con empresas pequeñas y medianas?",
    a: "Sí. Trabajamos con organizaciones de diversos tamaños y sectores. Nuestro enfoque se adapta tanto a empresas que dan sus primeros pasos en digitalización como a aquellas que buscan optimizar procesos existentes.",
  },
  {
    q: "¿Pueden mejorar sistemas existentes?",
    a: "Por supuesto. Analizamos el sistema actual, identificamos oportunidades de mejora y proponemos un plan de evolución que puede incluir nuevas funcionalidades, mejoras de rendimiento o migraciones tecnológicas.",
  },
  {
    q: "¿Cómo comienza un proyecto?",
    a: "El proceso comienza con una reunión para entender el desafío y los objetivos del negocio. A partir de ahí, realizamos un análisis y presentamos una propuesta con el alcance, la estrategia y los tiempos estimados.",
  },
  {
    q: "¿Ofrecen soporte después de la implementación?",
    a: "Sí. Acompañamos a nuestros clientes durante toda la vida del software, realizando mantenimiento, mejoras y ajustes según las necesidades que surjan con el tiempo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas <span className="text-violet">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-xl border overflow-hidden transition-all ${
                openIndex === i
                  ? "border-violet/30 bg-violet/[0.03]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span
                  className={`font-medium text-sm ${
                    openIndex === i ? "text-violet" : ""
                  }`}
                >
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 transition-all ${
                    openIndex === i
                      ? "rotate-180 text-violet"
                      : "text-foreground/40"
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
