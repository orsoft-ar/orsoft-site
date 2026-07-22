"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MailIcon, MapPinIcon } from "./Icons";

const values = [
  {
    title: "Enfoque en el negocio",
    desc: "Cada solución parte de entender los objetivos y procesos de la organización.",
  },
  {
    title: "Soluciones personalizadas",
    desc: "No existen dos empresas iguales. Cada desarrollo se adapta a las necesidades reales.",
  },
  {
    title: "Calidad de desarrollo",
    desc: "Aplicamos buenas prácticas de ingeniería para garantizar software robusto y seguro.",
  },
  {
    title: "Acompañamiento continuo",
    desc: "Estamos presentes durante todo el ciclo de vida del proyecto y más allá.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="empresa" className="py-24 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformamos necesidades de negocio{" "}
            <span className="text-violet">en soluciones digitales</span>
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            OrSoft es una empresa dedicada al desarrollo de software a medida para
            organizaciones que buscan incorporar tecnología como una ventaja competitiva.
            Trabajamos junto a nuestros clientes para comprender sus objetivos, analizar
            sus procesos y crear soluciones que aporten valor real al negocio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-xl glass-card hover:border-violet/30 hover:bg-violet/[0.03] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-violet" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-xs uppercase tracking-widest text-foreground/40 bg-white/5">
              Detrás de OrSoft
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <div className="max-w-lg mx-auto p-8 rounded-2xl border border-violet/10 bg-violet/[0.02] hover:border-violet/20 hover:bg-violet/[0.04] transition-all text-center shadow-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-5 inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-violet/30 overflow-hidden"
            >
              <Image src="/perfil.png" alt="Mateo Gerbaudo" width={96} height={96} className="object-cover w-full h-full" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-1">Mateo Gerbaudo</h3>
            <p className="text-sm text-violet-light mb-4">Desarrollador Full Stack</p>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              Estudiante de 5° año de Ingeniería en Sistemas de Información en UTN FRVM.
              Apasionado por construir soluciones web completas, desde el frontend hasta el backend y el despliegue.
            </p>
            <div className="flex flex-col items-center gap-2 text-sm text-foreground/60 mb-6">
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-violet" />
                <span>mgerbaudo02@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-violet" />
                <span>Villa María, Córdoba, Argentina</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/mateo-gerbaudo-645279211/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet text-white text-sm font-medium hover:bg-violet-dark transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
