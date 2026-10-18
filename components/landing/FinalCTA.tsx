"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const assurances = ["Free to register", "Trade only", "No commitment"];

export function FinalCTA() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0, y = 20) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    // Starts in sage so it continues from the FAQ above without a seam
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,var(--color-sage)_0%,var(--color-ice-soft)_40%)] py-16 sm:py-24 lg:py-28">
      {/* Soft cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[800px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.p {...reveal(0, 12)} className="text-sm font-medium text-navy/60">
            Trade sign-up · Opening Dec 2026
          </motion.p>

          <motion.h2
            {...reveal(0.05)}
            className="mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Get{" "}
            early pricing.
          </motion.h2>

          <motion.p
            {...reveal(0.15, 14)}
            className="mt-5 max-w-md text-base leading-7 text-navy/70 sm:text-lg sm:leading-8"
          >
            Register your interest in 60 seconds. First access to the starter
            range, early pricing, no commitment.
          </motion.p>

          <motion.div
            {...reveal(0.25, 14)}
            className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-6"
          >
            <Link
              href="/register"
              className="group inline-flex h-14 w-full items-center justify-between gap-4 rounded-full bg-navy pl-7 pr-2 text-base font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 sm:w-auto sm:justify-center"
            >
              Register your interest
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <a
              href="tel:01923602706"
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <Phone className="h-4 w-4 text-cyan" />
              <span className="underline decoration-cyan decoration-2 underline-offset-[6px]">
                Or call 01923 602706
              </span>
            </a>
          </motion.div>

          <motion.ul
            {...reveal(0.4, 0)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-navy/65"
          >
            {assurances.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-cyan" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}