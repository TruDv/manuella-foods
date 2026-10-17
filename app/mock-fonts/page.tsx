import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Mock — Font comparison",
  robots: { index: false, follow: false },
};

export default function MockFontsPage() {
  return (
    <div className="min-h-screen bg-sage">
      {/* ============================================================
          A — INSTRUMENT SERIF
         ============================================================ */}
      <section className="border-b border-navy/10 px-6 py-20 sm:px-10 lg:px-16">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-navy/40">
          Option A — Instrument Serif
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1
              style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
              className="text-[3rem] font-normal leading-[1.02] tracking-[-0.02em] text-navy sm:text-[4rem] lg:text-[4.5rem]"
            >
              Never Run Out
              <br />
              <span className="italic text-cyan">Mid-Service.</span>
            </h1>

            <p className="mt-7 max-w-[28rem] font-sans text-[1.05rem] leading-[1.65] text-navy/60 sm:text-[1.15rem]">
              African and Caribbean wholesale staples — ordered online,
              delivered straight to your kitchen door, anywhere across North
              &amp; West London and the M1/M25 corridor.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-[0.95rem] font-medium text-white"
              >
                Register now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center rounded-full bg-cyan px-7 text-[0.95rem] font-medium text-navy"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[480px]">
              <Image
                src="/images/hero4.png"
                alt=""
                width={1200}
                height={1200}
                className="product-shadow relative z-10 h-auto w-full select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          B — BRICOLAGE GROTESQUE
         ============================================================ */}
      <section className="border-b border-navy/10 px-6 py-20 sm:px-10 lg:px-16">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-navy/40">
          Option B — Bricolage Grotesque
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1
              style={{ fontFamily: "var(--font-bricolage), system-ui" }}
              className="text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-navy sm:text-[3.5rem] lg:text-[4rem]"
            >
              Never Run Out
              <br />
              <span className="text-cyan">Mid-Service.</span>
            </h1>

            <p className="mt-7 max-w-[28rem] font-sans text-[1.05rem] leading-[1.65] text-navy/60 sm:text-[1.15rem]">
              African and Caribbean wholesale staples — ordered online,
              delivered straight to your kitchen door, anywhere across North
              &amp; West London and the M1/M25 corridor.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-[0.95rem] font-medium text-white"
              >
                Register now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center rounded-full bg-cyan px-7 text-[0.95rem] font-medium text-navy"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[480px]">
              <Image
                src="/images/hero4.png"
                alt=""
                width={1200}
                height={1200}
                className="product-shadow relative z-10 h-auto w-full select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          C — CURRENT (Geist extrabold) for reference
         ============================================================ */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-navy/40">
          Option C — Current (Geist extrabold) · for reference
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.03] tracking-[-0.035em] text-navy sm:text-[3.5rem] lg:text-[4rem]">
              Never Run Out
              <br />
              <span className="text-cyan">Mid-Service.</span>
            </h1>

            <p className="mt-7 max-w-[28rem] text-[1.05rem] leading-[1.65] text-navy/60 sm:text-[1.15rem]">
              African and Caribbean wholesale staples — ordered online,
              delivered straight to your kitchen door, anywhere across North
              &amp; West London and the M1/M25 corridor.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 text-[0.95rem] font-medium text-white"
              >
                Register now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center rounded-full bg-cyan px-7 text-[0.95rem] font-medium text-navy"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[480px]">
              <Image
                src="/images/hero4.png"
                alt=""
                width={1200}
                height={1200}
                className="product-shadow relative z-10 h-auto w-full select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-navy/10 bg-cream px-6 py-8 text-center sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.15em] text-navy/40">
          Throwaway page — delete after choosing
        </p>
      </div>
    </div>
  );
}