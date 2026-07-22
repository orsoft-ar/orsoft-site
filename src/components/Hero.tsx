"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 hero-gradient overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center justify-center w-28 h-28 rounded-full border-2 border-violet/30 p-2"
        >
          <Image src="/logo.png" alt="OrSoft" width={96} height={96} className="rounded-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Soluciones de software para empresas{" "}
          <span className="text-violet">que buscan crecer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          En OrSoft desarrollamos soluciones digitales personalizadas que ayudan a las
          organizaciones a optimizar procesos, mejorar su productividad y transformar
          sus ideas en herramientas tecnológicas eficientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-3 rounded-full bg-violet text-white font-medium hover:bg-violet-dark transition-all hover:shadow-lg hover:shadow-violet/25"
          >
            Solicitar una consulta
          </a>
          <a
            href="#servicios"
            className="px-8 py-3 rounded-full border border-white/20 text-foreground/80 hover:border-violet/50 hover:text-violet transition-colors"
          >
            Conocer servicios
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
