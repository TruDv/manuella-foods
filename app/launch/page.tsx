"use client";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Drumstick,
  CakeSlice,
  ShoppingBasket,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Launching December 2026",
  description:
    "Manuella Foods is launching December 2026. A local African, Caribbean and International wholesaler for restaurants, takeaways, caterers and bulk kitchens.",
};

const categories = [
  {
    icon: Leaf,
    title: "Fresh vegetables",
    body: "African and Caribbean favourites, sourced for freshness.",
  },
  {
    icon: Drumstick,
    title: "Meat, poultry & seafood",
    body: "Fresh, frozen and marinated options, plus herbs and spices.",
  },
  {
    icon: CakeSlice,
    title: "Bread, cakes & snacks",
    body: "Fresh breads, cakes, familiar snacks and soft drinks.",
  },
  {
    icon: ShoppingBasket,
    title: "Groceries & essentials",
    body: "Canned food, seasoning, dairy, home and personal care.",
  },
];

export default function LaunchPage() {
  return (
    <div className="relative">
      {/* Fixed nav */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <Nav />
      </div>

      <main className="pt-16">
        {/* ============================================================
            INTRO - quiet, no big hero
            ============================================================ */}
        <section className="bg-sage py-16 sm:py-20">
          <div className="mx-auto max-w-[820px] px-6 sm:px-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
              Launching December 2026
            </p>

            <h1 className="font-display text-[1.75rem] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy sm:text-[2.25rem]">
              Manuella Foods is a Watford-based African, Caribbean and
              International wholesaler.
            </h1>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-navy/70 sm:text-[16px]">
              <p>
                We're building a wholesale supplier for restaurants,
                takeaways, caterers and bulk kitchens across North &amp;
                West London and along the M1/M25 corridor.
              </p>
              <p>
                We'll supply food, drinks, vegetables and meat - plus the
                usual grocery essentials like canned food, seasoning,
                dairy, and home &amp; personal care.
              </p>
              <p>
                Orders will be placed online and delivered straight to your
                kitchen door. No trade counter. No minimum-order guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            WHAT'S COMING - simple two-column list
            ============================================================ */}
        <section className="border-t border-navy/5 bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-[820px] px-6 sm:px-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
              What we're bringing
            </p>
            <h2 className="font-display text-[1.5rem] font-extrabold leading-[1.2] tracking-[-0.03em] text-navy sm:text-[1.85rem]">
              Four categories, ready for your kitchen.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="flex items-start gap-4 border-t border-navy/10 pt-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice text-cyan">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold tracking-[-0.01em] text-navy">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-navy/55">
                        {cat.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            SIMPLE INVITATION - one quiet line
            ============================================================ */}
        <section className="border-t border-navy/5 bg-white py-14 sm:py-16">
          <div className="mx-auto flex max-w-[820px] flex-col items-start gap-5 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-navy sm:text-xl">
                Want first access?
              </h3>
              <p className="mt-1 text-[14px] text-navy/55">
                Register your interest - we'll send the starter range and
                early pricing.
              </p>
            </div>

            <Link
              href="/register"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-navy py-2 pl-5 pr-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-navy-dark"
            >
              Register
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}