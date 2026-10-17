"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ice-soft py-20 sm:py-28">
      {/* Ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[140px]"
      />

      {/* Subtle dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,43,92,0.12) 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-cyan"
          >
            Trade sign-up · Opening Dec 2026
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="font-display text-[2.25rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-navy sm:text-[3rem] lg:text-[3.25rem]"
          >
            Get <span className="text-cyan">early pricing.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-navy/60 sm:text-base"
          >
            Register your interest in 60 seconds. First access to the
            starter range, early pricing, no commitment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/register"
              className="group inline-flex items-center gap-3 rounded-full bg-navy py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-lg shadow-navy/15 transition-all hover:-translate-y-0.5 hover:bg-navy-dark"
            >
              Register your interest
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="tel:01923602706"
              className="text-sm font-medium text-navy/60 transition-colors hover:text-navy"
            >
              Or call 01923 602706
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xs font-medium uppercase tracking-[0.15em] text-navy/40"
          >
            Free to register · Trade only · No commitment
          </motion.p>
        </div>
      </div>
    </section>
  );
}