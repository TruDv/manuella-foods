"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "w-full transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        {/* Same max-width + padding as the hero so edges line up */}
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div
            className={cn(
              // Increased the height slightly from h-16/h-[4.5rem] to h-[4.5rem]/h-20 to fit the bigger logo
              "flex h-[4.5rem] items-center justify-between rounded-full px-3 pl-5 transition-all duration-500 sm:h-20",
              scrolled
                ? "border border-navy/10 bg-white/70 shadow-sm backdrop-blur-xl"
                : "border border-transparent bg-transparent"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Manuella"
                width={220} // Increased intrinsic width
                height={64} // Increased intrinsic height
                priority
                className="h-11 w-auto sm:h-12" // Increased rendered size
              />
            </Link>

            {/* Center links — desktop */}
            <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
              <Link href="/#how" className="transition-colors hover:text-navy">
                How it works
              </Link>
              <Link href="/#faq" className="transition-colors hover:text-navy">
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="transition-colors hover:text-navy"
              >
                Contact
              </Link>
            </nav>

            {/* Right side — desktop Register, mobile menu button */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                className="group hidden h-10 rounded-full bg-navy px-5 text-sm font-medium text-white transition-all hover:bg-navy-dark md:inline-flex"
              >
                <Link href="/register">
                  Register
                  <ArrowUpRight className="ml-0.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          Mobile menu — full screen overlay
         ============================================================ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-[100] bg-navy md:hidden"
          >
            {/* Top bar */}
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <Image
                src="/images/manuella-logo-white.png"
                alt="Manuella"
                width={220} // Increased intrinsic width
                height={64} // Increased intrinsic height
                className="h-11 w-auto sm:h-12" // Increased rendered size
              />

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
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
              className="mt-12 flex flex-col gap-2 px-5 sm:px-8"
            >
              {[
                { href: "/#how", label: "How it works" },
                { href: "/#faq", label: "FAQ" },
                { href: "/#contact", label: "Contact" },
              ].map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 12 },
                  }}
                  transition={{ duration: 0.4, ease }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-display text-3xl font-bold tracking-[-0.03em] text-white transition-colors hover:text-cyan"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider + Register */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 12 },
                }}
                transition={{ duration: 0.4, ease }}
                className="mt-8 border-t border-white/10 pt-8"
              >
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="group inline-flex items-center gap-3 rounded-full bg-cyan py-2 pl-6 pr-2 text-sm font-semibold text-navy transition-all hover:bg-cyan-light"
                >
                  Register your interest
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-cyan transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Footer info */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 12 },
                }}
                transition={{ duration: 0.4, ease }}
                className="mt-16 space-y-2 text-sm text-white/50"
              >
                <p>Watford-based</p>
                <p>N &amp; W London · M1/M25</p>
                <a
                  href="tel:01923602706"
                  className="mt-4 inline-block text-white/70 transition-colors hover:text-white"
                >
                  📞 01923 602706
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}