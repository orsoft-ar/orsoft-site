"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Empresa", href: "#empresa" },
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="OrSoft"
            width={scrolled ? 28 : 32}
            height={scrolled ? 28 : 32}
            className="rounded-md transition-all"
          />
          <span
            className={`font-bold tracking-tight transition-all ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            OrSoft
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-violet transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-5 py-2 rounded-full bg-violet text-white hover:bg-violet-dark transition-colors"
          >
            Solicitar consulta
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/70 hover:text-violet transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-sm px-5 py-2 rounded-full bg-violet text-white hover:bg-violet-dark text-center transition-colors"
            >
              Solicitar consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
