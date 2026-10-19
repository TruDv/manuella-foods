"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Package,
  Truck,
  Pause,
  Play,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  EDIT THESE                                                         */
/* ------------------------------------------------------------------ */

// Logo (white version with the coloured M works best on the dark overlay)
const LOGO = "/images/logowhite.png";

const SLIDE_MS = 6000;

const SLIDES = [
  {
    id: "staples",
    tab: "Staples",
    image: "/images/vegetables.jpg",
    headline: "Never run out of African & Caribbean staples.",
    body: "Wholesale staples ordered online and delivered direct to your kitchen door.",
  },
  {
    id: "essentials",
    tab: "Kitchen essentials",
    // Same photo for now. Swap in a second staples image when you have one.
    image: "/images/hero5.png",
    headline: "Never run out of the flavours your customers love.",
    body: "From yam and plantain to palm oil, spices and fufu flour, everything your kitchen reorders, in one place.",
  },
] as const;

const MARQUEE = [
  "Plantain",
  "Yam",
  "Cassava",
  "Scotch bonnet",
  "Palm oil",
  "Egusi",
  "Garri",
  "Fufu flour",
  "Stockfish",
  "Salt fish",
  "Ackee",
  "Black-eyed beans",
  "Okra",
  "Eddoes",
  "Jerk seasoning",
  "Rice",
];

const ease = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const hovering = useRef(false);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
    setProgressKey((k) => k + 1);
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => {
      if (!hovering.current) go(index + 1);
      else setProgressKey((k) => k + 1);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduce, go, progressKey]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(index + 1);
    else if (info.offset.x > 60) go(index - 1);
  };

  const slide = SLIDES[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Manuella Foods product range"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-dark"
    >
      {/* ---------- BACKGROUND SLIDER ---------- */}
      <motion.div
        className="absolute inset-0 -z-20 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={onDragEnd}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduce ? false : { scale: 1.12 }}
              animate={reduce ? undefined : { scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="pointer-events-none select-none object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Overlays: keep text readable, add brand colour */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/85 via-navy-dark/55 to-navy-dark/95"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(0,160,220,0.22), transparent 70%)",
        }}
      />

      {/* ---------- SIDE FLOATERS (desktop only) ---------- */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -30 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.7 }}
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
          <Package className="h-5 w-5 text-cyan" />
          <div className="text-sm leading-tight">
            <p className="font-semibold">African &amp; Caribbean staples</p>
            <p className="text-white/60">Wholesale, ordered online</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.85 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
          <Truck className="h-5 w-5 text-cyan" />
          <div className="text-sm leading-tight">
            <p className="font-semibold">Direct to your kitchen</p>
            <p className="text-white/60">North &amp; West London</p>
          </div>
        </div>
      </motion.div>

      {/* ---------- CONTENT ---------- */}
      <div className="mx-auto flex w-full max-w-[920px] flex-1 flex-col items-center px-5 pb-6 pt-10 text-center sm:px-8 sm:pt-14">
        {/* Centred logo */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: -10 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="relative h-24 w-64 sm:h-32 sm:w-80 lg:h-36 lg:w-[22rem]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-cyan/25 blur-3xl"
          />
          <Image
            src={LOGO}
            alt="Manuella Foods"
            fill
            priority
            sizes="(max-width: 640px) 256px, 352px"
            className="object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Coming soon to your doorstep
        </motion.p>

        {/* Rotating headline + body */}
        <div
          className="mt-6 min-h-[15rem] w-full sm:min-h-[14rem] lg:min-h-[14rem]"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease }}
            >
              <h1 className="mx-auto max-w-[17ch] font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:max-w-[22ch] sm:text-[3.25rem] lg:text-[3.75rem]">
                {slide.headline}
              </h1>
              <p className="mx-auto mt-4 max-w-[34rem] text-base font-medium leading-7 text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.6)] sm:text-lg sm:leading-8">
                {slide.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Launch month */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-8 w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-navy/60 px-6 py-5 backdrop-blur-md sm:px-8 sm:py-6">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/30 blur-3xl"
            />
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-white/70">
              <CalendarDays className="h-4 w-4 text-cyan" />
              We open our doors in
            </p>
            <p className="mt-1 font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-white sm:text-6xl">
              December{" "}
              <span className="text-cyan">2026</span>
            </p>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan"
            />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-7 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6"
        >
          <Button
            asChild
            size="lg"
            className="group h-14 w-full rounded-full bg-cyan pl-7 pr-2 text-base font-semibold text-white shadow-lg shadow-cyan/30 transition-all hover:-translate-y-0.5 hover:bg-navy sm:w-auto"
          >
            <Link href="/register">
              Register your interest
              <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Button>

          <Link
            href="#how"
            className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            <span className="underline decoration-cyan decoration-2 underline-offset-[6px]">
              How it works
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/60">
          <MapPin className="h-4 w-4 text-cyan" />
          Watford-based, serving North &amp; West London and the M1/M25 corridor
        </p>
      </div>

      {/* ---------- SLIDE SELECTOR ---------- */}
      <div className="mx-auto w-full max-w-[920px] px-5 pb-5 sm:px-8">
        <div className="flex items-stretch gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="hidden h-auto w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div role="tablist" aria-label="Choose a slide" className="grid flex-1 grid-cols-2 gap-2 sm:gap-3">
            {SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-label={s.tab}
                  onClick={() => go(i)}
                  className={`group relative overflow-hidden rounded-xl border text-left backdrop-blur-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                    active
                      ? "border-white/40 bg-white/20"
                      : "border-white/15 bg-white/5 hover:bg-white/15"
                  }`}
                >
                  <div className="flex items-center gap-2.5 p-2 sm:gap-3 sm:p-2.5">
                    <span className="relative hidden h-11 w-11 shrink-0 overflow-hidden rounded-lg sm:block">
                      <Image src={s.image} alt="" fill sizes="44px" className="object-cover" />
                    </span>
                    <span
                      className={`text-xs font-semibold leading-tight sm:text-sm ${
                        active ? "text-white" : "text-white/70"
                      }`}
                    >
                      {s.tab}
                    </span>
                  </div>

                  {/* progress bar */}
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
                    {active && (
                      <motion.span
                        key={progressKey}
                        className="block h-full origin-left bg-cyan"
                        initial={{ scaleX: reduce || paused ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: reduce || paused ? 0 : SLIDE_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="hidden h-auto w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            onClick={() => {
              setPaused((p) => !p);
              setProgressKey((k) => k + 1);
            }}
            className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* ---------- PRODUCT MARQUEE ---------- */}
      <div className="relative border-t border-white/10 bg-navy-dark/80 py-3 backdrop-blur-md">
        <div
          className="flex overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <motion.ul
            aria-label="Products we will stock"
            className="flex shrink-0 items-center gap-8 pr-8"
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <li
                key={i}
                aria-hidden={i >= MARQUEE.length}
                className="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-white/70"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}