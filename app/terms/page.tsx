import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-medium text-cyan hover:underline mb-8 inline-block">
          ← Back to home
        </Link>
        <h1 className="font-display text-3xl font-bold tracking-tight text-navy mb-6">Terms of Service</h1>
        <p className="text-sm text-navy/50 mb-8">Last updated: October 2026</p>

        <div className="space-y-6 text-[15px] leading-relaxed text-navy/70">
          <section>
            <h2 className="text-lg font-bold text-navy mb-2">1. Trade Only</h2>
            <p>Manuella Foods is a business-to-business (B2B) wholesale supplier. Our services are intended for registered businesses, restaurants, caterers, and trade kitchens. We do not sell to the general public.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">2. Registration</h2>
            <p>By registering your interest, you confirm that you are a legitimate business entity. Registering does not guarantee acceptance into our trade programme.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">3. Pricing and Availability</h2>
            <p>Any pricing or product information mentioned on this website or in our communications is subject to change without notice. All orders are subject to availability and delivery feasibility.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">4. Liability</h2>
            <p>This website is provided "as is" for informational purposes while we prepare for launch. We are not liable for any business decisions made based on the pre-launch information on this site.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">5. Contact</h2>
            <p>For any questions regarding these terms, please contact us at <a href="mailto:hello@manuellafoods.co.uk" className="text-cyan hover:underline">hello@manuellafoods.co.uk</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">6. Company Information</h2>
            <p>
              Manuella Foods Ltd is a company registered in England and Wales.<br />
              <strong>Company Number:</strong> 14725282<br />
              <strong>Registered Office:</strong> 72 Deacons Hill Road, Elstree, Hertfordshire, United Kingdom, WD6 3JJ
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}