"use client";

import { useEffect, useRef, useState } from "react";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhoWeSupply } from "@/components/landing/WhoWeSupply";
import { WhatsComing } from "@/components/landing/WhatsComing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => setHeaderHeight(el.offsetHeight);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="grain relative">
      {/* Fixed sage header — matches the hero so there's no seam */}
      <div
        ref={headerRef}
        className="fixed left-0 right-0 top-0 z-50 bg-sage"
      >
        <AnnouncementBar />
        <Nav />
      </div>

      <main style={{ paddingTop: headerHeight }}>
        <Hero />
        <HowItWorks />
        <WhoWeSupply />
        <WhatsComing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}