"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-sage pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-navy) 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom right, black, transparent 65%)",
        }}
      />

      {/* Soft brand-colour glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-16 -z-10 h-[360px] w-[360px] rounded-full bg-cyan/10 blur-[100px]"
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Headline and content */}
          <div className="relative z-10 max-w-[660px]">
            {/* Headline — two lines, action first, promise second */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
              className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              Keep your kitchen{" "}
              <span className="relative inline-block text-cyan">
                moving.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 w-full text-cyan/35"
                  fill="none"
                >
                  <path
                    d="M3 8C75 2 203 2 297 6"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Never run out.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
              className="mt-6 max-w-[520px] text-sm leading-6 text-navy/65 sm:text-base sm:leading-7"
            >
              African and Caribbean wholesale staples, ordered online and
              delivered to your business. Spend less time sourcing essentials
              and more time serving your customers.
            </motion.p>

            {/* Actions — side by side on all sizes */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.28 }}
              className="mt-7 flex items-center gap-3 sm:gap-5"
            >
              <Button
                asChild
                size="lg"
                className="group h-11 flex-1 rounded-full bg-navy pl-4 pr-2 text-sm font-medium text-white shadow-md shadow-navy/10 transition-all hover:-translate-y-0.5 hover:bg-navy-dark sm:flex-none sm:pl-5"
              >
                <Link href="/register">
                  Register your interest
                  <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5 sm:ml-3">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Button>

              <Link
                href="#how"
                className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/15 py-2.5 text-sm font-medium text-navy/75 transition-colors hover:border-navy/30 hover:text-cyan sm:flex-none sm:border-transparent sm:py-2"
              >
                How it works
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-navy/10 pt-4 text-xs font-medium text-navy/60"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan" />
                Based in Watford
              </span>

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan" />
                North &amp; West London
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Floating transparent image */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[300px] lg:ml-auto lg:mr-0 lg:max-w-[360px] xl:max-w-[420px] lg:-mt-20 xl:-mt-28"
          >
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-cyan/25 blur-3xl sm:-right-8"
            />

            <Image
              src="/images/hero7.png"
              alt="African and Caribbean food staples for professional kitchens"
              width={1200}
              height={1200}
              priority
              sizes="(max-width: 1024px) 300px, 420px"
              className="product-shadow relative z-10 h-auto w-full select-none"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-full bg-navy/20 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-3 left-8 -z-10 h-16 w-3/4 rounded-full bg-cyan/15 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}