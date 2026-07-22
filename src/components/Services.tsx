"use client";

import { motion } from "framer-motion";
import { CodeIcon, GlobeIcon, ZapIcon, RefreshIcon } from "./Icons";

const services = [
  {
    title: "Desarrollo de software a medida",
    desc: "Construimos sistemas personalizados adaptados a los procesos y objetivos de cada empresa.",
    icon: CodeIcon,
  },
  {
    title: "Aplicaciones web empresariales",
    desc: "Desarrollamos plataformas modernas para gestionar información, optimizar operaciones y mejorar procesos.",
    icon: GlobeIcon,
  },
  {
    title: "Automatización de procesos",
    desc: "Ayudamos a reducir tareas manuales mediante soluciones digitales inteligentes.",
    icon: ZapIcon,
  },
  {
    title: "Mantenimiento y evolución de sistemas",
    desc: "Acompañamos el crecimiento del software mediante mejoras, nuevas funcionalidades y optimizaciones.",
    icon: RefreshIcon,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones diseñadas <span className="text-violet">para cada necesidad</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Ofrecemos un conjunto de capacidades tecnológicas para abordar los desafíos
            más complejos de las organizaciones.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group p-8 rounded-2xl glass-card hover:border-violet/30 hover:bg-violet/[0.03] transition-all"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <s.icon className="w-8 h-8 text-violet mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
