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
      <div className="fixed left-0 right-0 top-0 z-50 bg-cream">
        <Nav />
      </div>

      <main className="pt-16">
        {/* Intro: sage fading into white, so there is no hard edge below */}
        <section className="bg-[linear-gradient(to_bottom,var(--color-sage)_0%,var(--color-sage)_55%,#ffffff_100%)] pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-[820px] px-5 sm:px-8">
            <p className="text-sm font-medium text-navy/60">
              Launching December 2026
            </p>

            <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-navy sm:text-[2.75rem]">
              Manuella Foods is a Watford-based African, Caribbean and
              International wholesaler.
            </h1>

            <div className="mt-8 space-y-5 text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
              <p>
                We’re building a wholesale supplier for restaurants,
                takeaways, caterers and bulk kitchens across North &amp; West
                London and along the M1/M25 corridor.
              </p>
              <p>
                We’ll supply food, drinks, vegetables and meat, plus the usual
                grocery essentials like canned food, seasoning, dairy, and
                home &amp; personal care.
              </p>
              <p>
                Orders will be placed online and delivered straight to your
                kitchen door. No trade counter. No minimum-order guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* What's coming */}
        <section className="bg-white pb-20 sm:pb-28">
          <div className="mx-auto max-w-[820px] px-5 sm:px-8">
            <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.03em] text-navy sm:text-[2.25rem]">
              Four categories, ready for your kitchen.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="flex flex-col rounded-3xl bg-sage/70 p-7"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm shadow-navy/10">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.025em] text-navy">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-navy/65">
                      {cat.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Invitation, fading into the footer */}
        <section className="bg-gradient-to-b from-white to-sage pb-20 sm:pb-28">
          <div className="mx-auto max-w-[820px] px-5 sm:px-8">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy p-7 text-white shadow-xl shadow-navy/20 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">
                  Want first access?
                </h3>
                <p className="mt-2 max-w-md text-base leading-7 text-white/75">
                  Register your interest and we’ll send the starter range and
                  early pricing.
                </p>
              </div>

              <Link
                href="/register"
                className="group inline-flex h-14 w-full shrink-0 items-center justify-between gap-4 rounded-full bg-white pl-7 pr-2 text-base font-semibold text-navy transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto sm:justify-center"
              >
                Register
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-navy transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}