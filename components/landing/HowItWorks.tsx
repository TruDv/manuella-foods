"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UserPlus, ShoppingBag, Truck, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    icon: UserPlus,
    title: "Register interest",
    body: "Tell us about your kitchen in a 60-second form. We’ll send you the starter list and early pricing.",
    note: "Takes 60 seconds",
  },
  {
    icon: ShoppingBag,
    title: "Order online",
    body: "Browse the range and place your order from your phone or computer. No calls, no paperwork.",
    note: "Available Dec 2026",
  },
  {
    icon: Truck,
    title: "Delivered to your door",
    body: "We deliver direct to your kitchen across N & W London and the M1/M25 corridor.",
    note: "Fast, reliable, direct",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0, y = 24) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section
      id="how"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
            From sign-up to your kitchen in{" "}
            three steps.
          </h2>
        </motion.div>

        {/* Steps */}
        <ol className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.li
                key={step.title}
                {...reveal(0.1 + i * 0.12)}
                className="relative flex flex-col rounded-3xl bg-sage/70 p-7 sm:p-8"
              >

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-cyan shadow-lg shadow-navy/20">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>

                <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.03em] text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-navy/70">
                  {step.body}
                </p>

                <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy/70">
                  <Check className="h-4 w-4 text-cyan" strokeWidth={2.5} />
                  {step.note}
                </p>
              </motion.li>
            );
          })}
        </ol>

        {/* CTA 
        <motion.div {...reveal(0.3, 16)} className="mt-14 flex justify-center">
          <Link
            href="/register"
            className="group inline-flex h-14 items-center gap-4 rounded-full bg-navy pl-7 pr-2 text-base font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            Get early access
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}