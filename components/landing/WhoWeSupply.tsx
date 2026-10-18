"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  UtensilsCrossed,
  ShoppingBag,
  ChefHat,
  Package,
  BadgeCheck,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const audiences = [
  {
    icon: UtensilsCrossed,
    label: "Restaurants",
    body: "Full-service kitchens with regular, high-volume supply needs.",
  },
  {
    icon: ShoppingBag,
    label: "Takeaways",
    body: "Fast-moving kitchens that need reliable stock without hassle.",
  },
  {
    icon: ChefHat,
    label: "Caterers",
    body: "Events, functions and pop-ups, supplied on your schedule.",
  },
  {
    icon: Package,
    label: "Bulk kitchens",
    body: "Contract, institutional and community kitchens at scale.",
  },
];

export function WhoWeSupply() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0, y = 24) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    // Sage band that fades in and out of white, so there are no hard edges
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,var(--color-sage)_20%,var(--color-sage)_80%,#ffffff_100%)] py-20 sm:py-28 lg:py-36">
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,43,92,0.10) 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 30% 50%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 30% 50%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: header */}
          <motion.div {...reveal()} className="max-w-xl">
            <h2 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
              Built for professional{" "}
              kitchens.
            </h2>
            <p className="mt-6 text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
              Trade customers only. Whether you run one kitchen or ten, you get
              the same reliable staples, delivered to your door.
            </p>

            <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy/70">
              <BadgeCheck className="h-4 w-4 text-cyan" />
              Registered trade customers only · Proof of business required
            </p>
          </motion.div>

          {/* Right: audience cards */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {audiences.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.label}
                  {...reveal(0.1 + i * 0.08, 20)}
                  className="group rounded-3xl bg-white p-6 shadow-sm shadow-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 sm:p-7"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-cyan">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.025em] text-navy">
                    {audience.label}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-navy/65">
                    {audience.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}