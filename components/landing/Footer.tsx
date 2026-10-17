import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  // Function to trigger the CookieYes preferences modal
  const openCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("cookieyes_preferences"));
  };

  return (
    <footer
      id="contact"
      className="border-t border-navy/10 bg-navy text-white"
    >
      <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        {/* Top - brand + contact */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-white">
              Manuella<span className="text-cyan">.</span>
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">
              African and Caribbean wholesale staples, ordered online and
              delivered direct to your kitchen door.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-cyan">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href="tel:01923602706"
                  className="transition-colors hover:text-white"
                >
                  01923 602706
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <a
                  href="mailto:hello@manuellafoods.co.uk"
                  className="transition-colors hover:text-white"
                >
                  hello@manuellafoods.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>Monday – Friday, 9am – 5pm</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                <span>
                  Watford - delivering N &amp; W London and along the M1/M25
                  corridor
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-cyan">
              Get started
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Register your interest to receive the starter range and early
              pricing when we launch in December 2026.
            </p>
            <Link
              href="/register"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-cyan-light"
            >
              Register your interest
            </Link>
          </div>
        </div>

        {/* Bottom - small print */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 text-[13px] text-white/50 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Company Info */}
            <div className="space-y-1">
              <p>© 2026 Manuella Foods Ltd. All rights reserved.</p>
              <p className="text-white/40">
                Registered in England &amp; Wales · Company No. 14725282
              </p>
              <p className="text-white/40">
                Registered Office: 72 Deacons Hill Road, Elstree, Hertfordshire, WD6 3JJ
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              
              {/* Cookie Settings Button - Using Custom Event */}
<button 
  type="button" 
  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} 
  className="hover:text-white transition-colors"
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