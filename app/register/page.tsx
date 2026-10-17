import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/register/RegisterForm";

export const metadata: Metadata = {
  title: "Register your interest",
  description:
    "Register your interest in Manuella Foods. African and Caribbean wholesale staples delivered to your kitchen. Trade only.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal header */}
      <header className="border-b border-navy/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-[-0.02em] text-navy"
          >
            Manuella<span className="text-cyan">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-navy/60 transition-colors hover:text-navy"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Page intro */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
            Trade sign-up
          </p>
          <h1 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem]">
            Register your interest
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-navy/60">
            Takes about 60 seconds. We'll send you the starter range and
            early pricing as soon as you're registered.
          </p>
        </div>

        <RegisterForm />
      </main>
    </div>
  );
}