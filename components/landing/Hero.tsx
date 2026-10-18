"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// Background image. Works with:
//  - a transparent PNG of food (keep "object-contain")
//  - a wide photo (change IMAGE_FIT to "object-cover")
const HERO_IMAGE = "/images/hero1.png";
const IMAGE_FIT = "object-contain"; // or "object-cover"

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number, y = 18) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,var(--color-sage)_0%,var(--color-sage)_50%,#ffffff_100%)]">
      {/* Soft light behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[75%]"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 25%, rgba(255,255,255,0.95), transparent 75%)",
        }}
      />

      {/* CONTENT */}
      <div className="mx-auto flex max-w-[880px] flex-col items-center px-5 pt-14 text-center sm:px-8 sm:pt-20 lg:pt-24">
        <motion.h1
          {...rise(0.12)}
          className="font-display text-[2.9rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy sm:text-[4.25rem] lg:text-[5.25rem]"
        >
          Never run{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">out.</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.08em] bottom-[0.06em] top-[0.55em] z-0 rounded-[0.18em] bg-cyan/45"
            />
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.22, 14)}
          className="mt-6 max-w-[34rem] text-lg leading-8 text-navy/70 sm:text-xl sm:leading-9"
        >
          Be first to order Afro-Caribbean wholesale staples online, delivered
          direct to your kitchen door. Join early for launch pricing and first
          access to our starter range.
        </motion.p>

        <motion.div
          {...rise(0.3, 14)}
          className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6"
        >
          <Button
            asChild
            size="lg"
            className="group h-14 w-full rounded-full bg-navy pl-7 pr-2 text-base font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-dark sm:w-auto"
          >
            <Link href="/register">
              Get early access
              <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>

          <Link
            href="#how"
            className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            <span className="underline decoration-cyan decoration-2 underline-offset-[6px]">
              How it works
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.p
          {...rise(0.38, 0)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy/60"
        >
          <MapPin className="h-4 w-4 text-cyan" />
          Watford-based · North &amp; West London · M1/M25 corridor
        </motion.p>
      </div>

      {/* IMAGE: smaller, rises from the bottom and fades into the background */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.25 }}
        className="relative mx-auto mt-6 h-[190px] w-full max-w-[760px] sm:mt-8 sm:h-[250px] lg:h-[300px]"
      >
        {/* Cyan glow under the food */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[12%] bottom-0 h-2/3 rounded-full bg-cyan/25 blur-[80px]"
        />
        <Image
          src={HERO_IMAGE}
          alt="African and Caribbean food staples for professional kitchens"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 760px"
          className={`${IMAGE_FIT} object-bottom select-none`}
          style={{
            // Fades the top and both sides into the section background
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 35%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 35%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </motion.div>

      {/* Blends the hero into the white section below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white sm:h-28"
      />
    </section>
  );
}