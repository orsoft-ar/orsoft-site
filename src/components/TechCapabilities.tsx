"use client";

import { motion } from "framer-motion";
import { TargetIcon, GlobeIcon, LayersIcon, ZapIcon, TrendingIcon } from "./Icons";

const capabilities = [
  { title: "Sistemas empresariales", icon: TargetIcon },
  { title: "Aplicaciones web", icon: GlobeIcon },
  { title: "Integración entre plataformas", icon: LayersIcon },
  { title: "Automatización de procesos", icon: ZapIcon },
  { title: "Soluciones escalables", icon: TrendingIcon },
];

const capVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function TechCapabilities() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ingeniería de software aplicada{" "}
            <span className="text-violet">a soluciones reales</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Combinamos arquitectura moderna, buenas prácticas de desarrollo y experiencia
            técnica para crear sistemas seguros, eficientes y preparados para crecer.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={capVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-6 rounded-xl glass-card hover:border-violet/30 hover:bg-violet/[0.03] transition-all"
            >
              <c.icon className="w-8 h-8 text-violet mx-auto mb-3" />
              <p className="text-sm font-medium">{c.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
