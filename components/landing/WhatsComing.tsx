"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Leaf,
  Drumstick,
  CakeSlice,
  ShoppingBasket,
  ArrowRight,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
  {
    icon: Leaf,
    label: "Fresh Vegetables",
    body: "African and Caribbean favourites, sourced for freshness.",
  },
  {
    icon: Drumstick,
    label: "Meat, Poultry & Seafood",
    body: "Fresh, frozen and marinated options, plus herbs and spices.",
  },
  {
    icon: CakeSlice,
    label: "Bread, Cakes & Snacks",
    body: "Fresh breads, cakes, familiar snacks and soft drinks.",
  },
  {
    icon: ShoppingBasket,
    label: "Groceries & Essentials",
    body: "Canned food, seasoning, dairy, home and personal care.",
  },
];

export function WhatsComing() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0, y = 24) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-navy/60">Launching December 2026</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
            What we’re bringing to{" "}
            your kitchen.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
            Your local African, Caribbean and international wholesaler: food,
            drinks, vegetables, meat, plus the usual grocery essentials.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                {...reveal(0.1 + i * 0.08, 20)}
                className="group flex flex-col rounded-3xl bg-sage/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-sage hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy shadow-sm shadow-navy/10 transition-colors duration-300 group-hover:bg-navy group-hover:text-cyan">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-navy">
                  {cat.label}
                </h3>
                <p className="mt-2 text-base leading-7 text-navy/65">
                  {cat.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div {...reveal(0.3, 16)} className="mt-12 flex justify-center">
          <Link
            href="/launch"
            className="group inline-flex h-14 items-center gap-4 rounded-full border-2 border-navy/15 bg-white pl-7 pr-2 text-base font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg hover:shadow-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
          >
            See the full launch plan
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cyan transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}