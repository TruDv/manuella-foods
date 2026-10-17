"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, ChefHat, Package } from "lucide-react";

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
    body: "Events, functions and pop-ups - supplied on your schedule.",
  },
  {
    icon: Package,
    label: "Bulk kitchens",
    body: "Contract, institutional and community kitchens at scale.",
  },
];

export function WhoWeSupply() {
  return (
    <section className="relative overflow-hidden bg-sage py-24 sm:py-32">
      {/* Ambient cyan glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.08] blur-[140px]"
      />

      {/* Dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(62,64,149,0.08) 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at center, black 20%, transparent 75%)",
        }}
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
            Who we supply
          </p>
<h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">            Built for professional kitchens.
            <br />
            <span className="text-cyan">Trade customers only.</span>
          </h2>
        </motion.div>

        {/* Circles - flat, no cards */}
        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {audiences.map((audience, i) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.08 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Circle with icon - subtle glow on hover only */}
                <div className="relative mb-6">
                  {/* Soft cyan halo - appears on hover */}
                  <div className="absolute inset-0 rounded-full bg-cyan/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Static outer ring */}
                  <div className="absolute -inset-3 rounded-full border border-navy/[0.06]" />

                  {/* Icon circle */}
                  <div className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full bg-white shadow-[0_12px_40px_-14px_rgba(62,64,149,0.22)] ring-1 ring-navy/5 transition-transform duration-500 group-hover:-translate-y-1 sm:h-[124px] sm:w-[124px]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ice to-ice-soft sm:h-[72px] sm:w-[72px]">
                      <Icon
                        className="h-7 w-7 text-navy transition-colors duration-300 group-hover:text-cyan sm:h-8 sm:w-8"
                        strokeWidth={1.6}
                      />
                    </div>
                  </div>
                </div>

                {/* Label */}
                <h3 className="font-display text-lg font-bold tracking-[-0.015em] text-navy">
                  {audience.label}
                </h3>

                {/* Description - always visible, quiet */}
                <p className="mt-2 max-w-[200px] text-[13px] leading-relaxed text-navy/55">
                  {audience.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center text-xs font-medium uppercase tracking-[0.15em] text-navy/40"
        >
          Registered trade customers only · Proof of business required
        </motion.p>
      </div>
    </section>
  );
}