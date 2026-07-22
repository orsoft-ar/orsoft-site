"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Análisis", desc: "Comprendemos el problema y los objetivos del negocio." },
  { number: "02", title: "Planificación", desc: "Definimos la solución, alcance y estrategia." },
  { number: "03", title: "Desarrollo", desc: "Construimos software utilizando buenas prácticas de ingeniería." },
  { number: "04", title: "Implementación", desc: "Acompañamos la puesta en funcionamiento." },
  { number: "05", title: "Evolución", desc: "Mejoramos la solución según las nuevas necesidades." },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un proceso pensado{" "}
            <span className="text-violet">para obtener mejores resultados</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Nuestra metodología de trabajo está diseñada para reducir riesgos y garantizar
            que cada proyecto cumpla con los objetivos del negocio.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-violet/20 via-violet/40 to-violet/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={stepVariants}
                className="text-center relative"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-violet/10 flex items-center justify-center mx-auto mb-4 border-2 border-violet/20 group-hover:border-violet/40 transition-colors">
                  <span className="text-lg font-bold text-violet">{step.number}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
