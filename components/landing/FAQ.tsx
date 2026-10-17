"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Who are you?",
    a: "Manuella Foods, a Watford-based wholesale supplier of African and Caribbean food. We supply trade customers only: restaurants, takeaways, caterers and bulk kitchens.",
  },
  {
    q: "Where do you deliver?",
    a: "North and West London and along the M1/M25 corridor. Enter your postcode at sign-up and we'll confirm your delivery zone.",
  },
  {
    q: "Do you have a shop I can visit?",
    a: "No. We deliver direct to your kitchen - no trade counter, no collections.",
  },
  {
    q: "What do you sell?",
    a: "African and Caribbean wholesale staples. We'll send you the full starter list and prices as soon as you register.",
  },
  {
    q: "Do you have fresh or frozen?",
    a: "Not at launch. We are starting with dry goods - rice, oils, canned goods, spices, pulses and more.",
  },
  {
    q: "How do I order?",
    a: "Online, from your phone or computer. Ordering opens December 2026.",
  },
  {
    q: "When do you start delivering?",
    a: "We're aiming for December 2026. Register early to be first in the queue.",
  },
  {
    q: "Which days do you deliver, and what is the order cut-off?",
    a: "Delivery days and cut-off times will be confirmed closer to launch. Register to be notified.",
  },
  {
    q: "Do you sell to the public?",
    a: "No - trade only. Restaurants, takeaways, caterers and bulk kitchens.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-t border-navy/10 bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - header */}
          <div className="lg:col-span-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
              FAQ
            </p>
            <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
              Questions,{" "}
              <span className="text-cyan">answered.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-navy/60">
              Still not sure about something? Call us on 01923 602706 -
              Monday to Friday, 9am to 5pm.
            </p>
          </div>

          {/* Right - accordion */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-navy sm:text-base">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? "border-cyan bg-cyan text-white"
                            : "border-navy/15 text-navy/60 group-hover:border-navy/30"
                        }`}
                      >
                        <Plus
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-navy/60">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}