"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/mgerbaudo02@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: "Consulta desde orsoft.site",
        }),
      });
      if (!res.ok) throw new Error("Error");
      setSent(true);
      setData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      alert("Error al enviar. Intentalo de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white/5">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tenés una idea o un{" "}
            <span className="text-violet">desafío tecnológico</span>?
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Escribime y analicemos juntos la mejor solución para tu negocio.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground/70">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet/50 focus:outline-none focus:ring-1 focus:ring-violet/30 text-sm transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="tu@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet/50 focus:outline-none focus:ring-1 focus:ring-violet/30 text-sm transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground/70">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Contame sobre tu proyecto..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet/50 focus:outline-none focus:ring-1 focus:ring-violet/30 text-sm transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-full bg-violet text-white font-medium hover:bg-violet-dark transition-colors disabled:opacity-60"
          >
            {sending ? "Enviando..." : sent ? "✓ Enviado" : "Enviar mensaje"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
