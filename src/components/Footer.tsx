"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="OrSoft" width={28} height={28} className="rounded-md" />
              <span className="font-bold">OrSoft</span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Desarrollo de software a medida para empresas.
            </p>
          </motion.div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/50">
              <li><a href="#empresa" className="hover:text-violet transition-colors">Sobre OrSoft</a></li>
              <li><a href="#metodologia" className="hover:text-violet transition-colors">Metodología</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Servicios</h4>
            <ul className="space-y-2 text-sm text-foreground/50">
              <li><a href="#servicios" className="hover:text-violet transition-colors">Software a medida</a></li>
              <li><a href="#servicios" className="hover:text-violet transition-colors">Apps web</a></li>
              <li><a href="#servicios" className="hover:text-violet transition-colors">Automatización</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-foreground/50">
              <li>
                <a href="mailto:mgerbaudo02@gmail.com" className="hover:text-violet transition-colors">
                  mgerbaudo02@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/orsoft.site" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">
                  @orsoft.site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-foreground/40">
            OrSoft &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xs text-foreground/30">
            orsoft.site — Desarrollo de software a medida para empresas.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
