"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const explore = [
  { href: "/#how", label: "How it works" },
  { href: "/launch", label: "Launch plan" },
  { href: "/#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Top: brand, links, contact, CTA */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logowhite.png"
                alt="Manuella"
                width={280}
                height={80}
                priority
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-5 max-w-xs text-base leading-7 text-white/70">
              African and Caribbean wholesale staples, ordered online and
              delivered direct to your kitchen door.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-base text-white/70">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-base text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href="tel:01923602706"
                  className="transition-colors hover:text-white"
                >
                  01923 602706
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href="mailto:info@manuellafoods.co.uk"
                  className="break-all transition-colors hover:text-white"
                >
                  info@manuellafoods.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <span>Monday to Friday, 9am to 5pm</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <span>
                  Watford, delivering N &amp; W London and along the M1/M25
                  corridor
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">Get started</h3>
            <p className="mt-5 text-base leading-7 text-white/70">
              Register your interest to receive the starter range and early
              pricing when we launch in December 2026.
            </p>
            <Link
              href="/register"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-base font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-cyan-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Register your interest
            </Link>
          </div>
        </div>

        {/* Bottom: small print */}
        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16">
          <div className="flex flex-col gap-6 text-sm text-white/60 lg:flex-row lg:items-end lg:justify-between">
            {/* Company info */}
            <div className="space-y-1">
              <p>© 2026 Manuella Foods Ltd. All rights reserved.</p>
              <p className="text-white/50">
                Registered in England &amp; Wales · Company No. 14725282
              </p>
              <p className="text-white/50">
                Registered Office: 72 Deacons Hill Road, Elstree,
                Hertfordshire, WD6 3JJ
              </p>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("open-cookie-settings"))
                }
                className="transition-colors hover:text-white"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}