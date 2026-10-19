"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const item = {
    open: { opacity: 1, y: 0 },
    closed: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
  };

  return (
    <>
      <header
        className={cn(
          "w-full transition-all duration-500",
          scrolled ? "py-2" : "py-3 sm:py-4"
        )}
      >
        {/* Same max-width + padding as the hero so edges line up */}
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div
            className={cn(
              "flex h-16 items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 sm:h-[4.5rem]",
              scrolled
                ? "border border-navy/10 bg-white/80 shadow-sm shadow-navy/5 backdrop-blur-xl"
                : "border border-transparent bg-transparent"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <Image
                src="/images/logo.png"
                alt="Manuella"
                width={400}
                height={100}
                priority
                className="h-14 w-auto sm:h-16"
              />
            </Link>

            {/* Centre links, desktop */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-9 text-[15px] font-medium text-navy/70 md:flex"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right: desktop Register, mobile menu button */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                className="group hidden h-11 rounded-full bg-navy px-6 text-[15px] font-semibold text-white transition-all hover:bg-navy-dark md:inline-flex"
              >
                <Link href="/register">
                  Register
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="flex h-12 w-12 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu: full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-navy md:hidden"
          >
            {/* Top bar */}
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <Image
                src="/images/manuella-logo-white.png"
                alt="Manuella"
                width={220}
                height={64}
                className="h-10 w-auto sm:h-12"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: {},
              }}
              className="mt-8 flex flex-col px-5 pb-12 sm:px-8"
            >
              {links.map((l) => (
                <motion.div
                  key={l.href}
                  variants={item}
                  transition={{ duration: 0.4, ease }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-display text-3xl font-semibold tracking-[-0.03em] text-white transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              {/* Register */}
              <motion.div
                variants={item}
                transition={{ duration: 0.4, ease }}
                className="mt-8 border-t border-white/10 pt-8"
              >
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="group flex h-14 w-full items-center justify-between rounded-full bg-cyan pl-7 pr-2 text-base font-semibold text-navy transition-all hover:bg-cyan-light"
                >
                  Register your interest
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cyan transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Contact info */}
              <motion.div
                variants={item}
                transition={{ duration: 0.4, ease }}
                className="mt-12 space-y-2 text-base text-white/60"
              >
                <p>Watford-based</p>
                <p>N &amp; W London · M1/M25</p>
                <a
                  href="tel:01923602706"
                  className="mt-4 inline-flex min-h-12 items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-cyan" />
                  01923 602706
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}