import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-navy/10 bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-medium text-cyan hover:underline mb-8 inline-block">
          ← Back to home
        </Link>
        <h1 className="font-display text-3xl font-bold tracking-tight text-navy mb-6">Privacy Policy</h1>
        <p className="text-sm text-navy/50 mb-8">Last updated: October 2026</p>

        <div className="space-y-6 text-[15px] leading-relaxed text-navy/70">
          <section>
            <h2 className="text-lg font-bold text-navy mb-2">1. Who we are</h2>
            <p>Manuella Foods Ltd ("we", "us", or "our") is a wholesale food supplier based in Hertfordshire, United Kingdom. We operate the website manuellafoods.co.uk.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">2. What data we collect</h2>
            <p>When you register your interest through our website, we collect the following information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name and business name</li>
              <li>Your phone number and email address</li>
              <li>Your delivery postcode area and business type</li>
              <li>Any optional information you provide (such as weekly spend or best time to call)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">3. How we use your data</h2>
            <p>We use this information strictly to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Contact you about your trade registration</li>
              <li>Send you early pricing and our starter range</li>
              <li>Understand the needs of your kitchen so we can serve you better</li>
            </ul>
            <p className="mt-2">We will never sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">4. How long we keep it</h2>
            <p>We keep your data until you ask us to delete it, or until it is no longer needed for the purpose it was collected.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-2">5. Your rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the data we hold about you</li>
              <li>Ask us to correct any mistakes</li>
              <li>Ask us to delete your data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, please email us at <a href="mailto:hello@manuellafoods.co.uk" className="text-cyan hover:underline">hello@manuellafoods.co.uk</a>.</p>
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