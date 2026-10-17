"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="relative overflow-hidden bg-navy text-white"
        >
          <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-2.5 sm:px-10 lg:px-16">
            <div className="flex flex-1 items-center justify-center gap-2 text-center text-[13px] font-medium sm:justify-start sm:text-left">
              <span className="hidden sm:inline">🚀</span>
              <span>
                <span className="font-semibold text-cyan">
                  Launching December 2026
                </span>
                <span className="mx-2 text-white/40">·</span>
                <span className="text-white/85">
                  See what we're bringing to your kitchen
                </span>
              </span>
              <Link
                href="/launch"
                className="group ml-2 inline-flex items-center gap-1 font-semibold text-cyan transition-colors hover:text-cyan-light"
              >
                Learn more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}