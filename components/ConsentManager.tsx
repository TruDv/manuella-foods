"use client";

import {
  CookieBanner,
  CookiePreferences,
  RecallButton,
  initCookieYes,
} from "@cookieyes/nextjs";
import "@cookieyes/react/styles.css";

// Initialize the SDK
initCookieYes({
  mode: "cookie-only", // Keeps consent data in the user's browser (free & no server needed)
  regulation: "GDPR",  // Covers UK GDPR
  colorScheme: "light",
});

export function ConsentManager() {
  return (
    <>
      <CookieBanner />
      <CookiePreferences />
      <RecallButton />
    </>
  );
}