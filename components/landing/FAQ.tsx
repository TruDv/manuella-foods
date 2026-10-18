"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "Who are you?",
    a: "Manuella Foods, a Watford-based wholesale supplier of African and Caribbean food. We supply trade customers only: restaurants, takeaways, caterers and bulk kitchens.",
  },
  {
    q: "Where do you deliver?",
    a: "North and West London and along the M1/M25 corridor. Enter your postcode at sign-up and we’ll confirm your delivery zone.",
  },
  {
    q: "Do you have a shop I can visit?",
    a: "No. We deliver direct to your kitchen. There’s no trade counter and no collections.",
  },
  {
    q: "What do you sell?",
    a: "African and Caribbean wholesale staples. We’ll send you the full starter list and prices as soon as you register.",
  },
  {
    q: "Do you have fresh or frozen?",
    a: "Not at launch. We are starting with dry goods: rice, oils, canned goods, spices, pulses and more.",
  },
  {
    q: "How do I order?",
    a: "Online, from your phone or computer. Ordering opens December 2026.",
  },
  {
    q: "When do you start delivering?",
    a: "We’re aiming for December 2026. Register early to be first in the queue.",
  },
  {
    q: "Which days do you deliver, and what is the order cut-off?",
    a: "Delivery days and cut-off times will be confirmed closer to launch. Register to be notified.",
  },
  {
    q: "Do you sell to the public?",
    a: "No, trade only: restaurants, takeaways, caterers and bulk kitchens.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  const reveal = (delay = 0, y = 24) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    // White at the top, easing into sage at the bottom for a soft landing
    <section
      id="faq"
      className="relative bg-gradient-to-b from-white via-white to-sage py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: header and call card */}
          <motion.div {...reveal()} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
                Questions,{" "}
                answered.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
                Still not sure about something? Give us a call and we’ll talk
                it through.
              </p>

              <a
                href="tel:01923602706"
                className="group mt-8 flex max-w-md items-center gap-4 rounded-3xl bg-navy p-5 text-white shadow-xl shadow-navy/20 transition-all hover:-translate-y-0.5 hover:bg-navy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan text-navy">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-semibold tracking-[-0.02em]">
                    01923 602706
                  </span>
                  <span className="block text-sm text-white/70">
                    Monday to Friday, 9am to 5pm
                  </span>
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <div className="space-y-3 lg:col-span-7">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <motion.div
                  key={item.q}
                  {...reveal(0.05 + i * 0.04, 16)}
                  className={`rounded-2xl bg-white transition-shadow duration-300 ${
                    isOpen
                      ? "shadow-lg shadow-navy/10 ring-1 ring-navy/10"
                      : "shadow-sm shadow-navy/5 ring-1 ring-navy/[0.06] hover:ring-navy/15"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 rounded-2xl px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan sm:px-6"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-display text-lg font-semibold tracking-[-0.02em] text-navy">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-navy text-cyan"
                            : "bg-sage text-navy group-hover:bg-ice"
                        }`}
                      >
                        <Plus
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl px-5 pb-6 pr-12 text-base leading-7 text-navy/70 sm:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}