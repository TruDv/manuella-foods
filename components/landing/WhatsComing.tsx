"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <section className="relative overflow-hidden border-t border-navy/5 bg-cream py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.06] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
            Launching December 2026
          </p>
<h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
            What we're bringing
            <br />
            <span className="text-cyan">to your kitchen.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-navy/60">
            Your local African, Caribbean and International wholesaler -
            food, drinks, vegetables, meat, plus the usual grocery
            essentials.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(11,43,92,0.2)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice text-cyan transition-colors duration-300 group-hover:bg-navy group-hover:text-cyan">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold tracking-[-0.01em] text-navy">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-navy/55">
                    {cat.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to launch page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/launch"
            className="group inline-flex items-center gap-3 rounded-full border border-navy/15 bg-white py-2 pl-6 pr-2 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-lg hover:shadow-navy/10"
          >
            See the full launch plan
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-cyan transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}