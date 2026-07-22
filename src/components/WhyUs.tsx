"use client";

import { motion } from "framer-motion";
import { CheckIcon, TargetIcon, ShieldIcon, TrendingIcon } from "./Icons";

const reasons = [
  { title: "Desarrollo personalizado", desc: "Cada solución se adapta a los procesos y necesidades específicas de la organización.", icon: TargetIcon },
  { title: "Comunicación clara", desc: "Mantenemos una comunicación fluida y transparente durante todo el proyecto.", icon: CheckIcon },
  { title: "Soluciones escalables", desc: "El software se construye pensando en el crecimiento futuro del negocio.", icon: TrendingIcon },
  { title: "Visión a largo plazo", desc: "Buscamos ser un socio tecnológico, no solo un proveedor de software.", icon: ShieldIcon },
];

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un socio tecnológico <span className="text-violet">para tu empresa</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Más que desarrollar software, buscamos entender el desafío detrás de cada
            proyecto para crear soluciones que generen impacto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="flex gap-4 p-6 rounded-xl glass-card hover:border-violet/30 hover:bg-violet/[0.03] transition-all"
            >
              <r.icon className="w-6 h-6 text-violet shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
