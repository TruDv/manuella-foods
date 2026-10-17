"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UserPlus, ShoppingBag, Truck, Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    icon: UserPlus,
    title: "Register interest",
    body: "Tell us about your kitchen in a 60-second form. We'll send you the starter list and early pricing.",
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
  return (
    <section
      id="how"
      className="relative overflow-hidden border-t border-navy/5 bg-cream py-24 sm:py-32"
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan/[0.06] blur-[140px]"
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
            How it works
          </p>
          <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
            From sign-up to your kitchen
            <br />
            in <span className="text-cyan">three simple steps.</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative mt-24">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.15 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Icon cluster */}
                  <div className="relative mb-8">
                    {/* Pulsing outer ring */}
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-cyan/30"
                      animate={{
                        scale: [1, 1.22, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />

                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.3, ease }}
                      className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white shadow-[0_10px_40px_-12px_rgba(11,43,92,0.25)] ring-1 ring-navy/5"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ice to-ice-soft">
                        <Icon
                          className="h-6 w-6 text-navy"
                          strokeWidth={1.75}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-navy sm:text-[1.4rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-navy/60">
                    {step.body}
                  </p>

                  {/* Small confidence line */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.6 + i * 0.15 }}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-cyan"
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                    <span>{step.note}</span>
                  </motion.div>

                  {/*
                    Connector between this step and the next - desktop only.
                    Sits at the icon's vertical center (44px from top of the
                    icon circle, since the icon is 88px tall).
                    Positioned to start just past the current icon and end
                    just before the next icon.
                  */}
                  {!isLast && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute left-[calc(50%+70px)] right-[calc(-50%+70px)] top-[44px] hidden md:flex md:items-center"
                    >
                      {/* Animated dashed line */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.9,
                          ease,
                          delay: 0.7 + i * 0.2,
                        }}
                        style={{ transformOrigin: "left center" }}
                        className="h-px flex-1 border-t border-dashed border-navy/20"
                      />

                      {/* Small arrow at the end of the connector */}
                      <motion.div
                        initial={{ opacity: 0, x: -4 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          ease,
                          delay: 1.1 + i * 0.2,
                        }}
                        className="ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-cream"
                      >
                        <ArrowRight
                          className="h-2.5 w-2.5 text-cyan"
                          strokeWidth={2.5}
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 rounded-full bg-navy py-2 pl-6 pr-2 text-sm font-medium text-white shadow-lg shadow-navy/15 transition-all hover:-translate-y-0.5 hover:bg-navy-dark"
          >
            Start with step one
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}