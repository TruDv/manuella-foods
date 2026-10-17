"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { X } from "lucide-react";

export function ConsentManager() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("manuella-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setAnalyticsEnabled(consent === "accepted");
      setHasConsented(true);
    }

    const handleOpenModal = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", handleOpenModal);
    return () =>
      window.removeEventListener("open-cookie-settings", handleOpenModal);
  }, []);

  const saveConsent = (accepted: boolean) => {
    localStorage.setItem("manuella-cookie-consent", accepted ? "accepted" : "rejected");
    setAnalyticsEnabled(accepted);
    setHasConsented(true);
    setShowBanner(false);
    setShowModal(false);
    
    // Reload page so GA initializes correctly based on the new choice
    window.location.reload();
  };

  return (
    <>
      {/* 1. Script to deny GA by default */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
        `}
      </Script>

      {/* 2. Load GA script ONLY if they accepted */}
      {hasConsented && analyticsEnabled && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LD5XBPQ9QJ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LD5XBPQ9QJ');
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            `}
          </Script>
        </>
      )}

      {/* 3. The Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-6 left-6 right-6 z-[150] mx-auto max-w-md rounded-2xl border border-navy/10 bg-white p-6 shadow-2xl sm:left-6 sm:right-auto">
          <h3 className="font-display text-lg font-bold text-navy">We value your privacy</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            We use cookies to analyse site traffic and improve your experience.{" "}
            <Link href="/privacy" className="text-cyan hover:underline">
              Read our Privacy Policy
            </Link>.
          </p>
          <div className="mt-5 flex gap-3">
            <button onClick={() => saveConsent(true)} className="flex-1 rounded-full bg-cyan px-4 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-light">
              Accept
            </button>
            <button onClick={() => saveConsent(false)} className="flex-1 rounded-full border border-navy/20 px-4 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5">
              Reject
            </button>
          </div>
        </div>
      )}

      {/* 4. The Settings Modal (Opens from Footer) */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-navy">Cookie Settings</h2>
              <button onClick={() => setShowModal(false)} className="text-navy/40 hover:text-navy">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-6 text-sm text-navy/60">
              You can choose which cookies you allow us to use. Strictly necessary cookies are always active.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-navy">Strictly Necessary</p>
                  <p className="mt-1 text-xs text-navy/50">Required for the website to work.</p>
                </div>
                <div className="flex h-6 w-11 shrink-0 items-center rounded-full bg-cyan/20 px-1">
                  <div className="h-4 w-4 translate-x-5 rounded-full bg-cyan" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-navy">Analytics</p>
                  <p className="mt-1 text-xs text-navy/50">Helps us understand how visitors use the site.</p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`flex h-6 w-11 shrink-0 items-center rounded-full px-1 transition-colors ${analyticsEnabled ? "bg-cyan" : "bg-navy/20"}`}
                >
                  <div className={`h-4 w-4 rounded-full bg-white transition-transform ${analyticsEnabled ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => saveConsent(true)} className="flex-1 rounded-full bg-navy py-3 text-sm font-semibold text-white hover:bg-navy-dark">
                Accept All
              </button>
              <button onClick={() => saveConsent(false)} className="flex-1 rounded-full border border-navy/20 py-3 text-sm font-semibold text-navy hover:bg-navy/5">
                Reject Analytics
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}