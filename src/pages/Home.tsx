import { useEffect } from "react";
import { setPageSeo } from "@/utils/seo";
import { HomeNav } from "@/components/home/HomeNav";
import { HomeHero } from "@/components/home/HomeHero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { ModulesSection } from "@/components/home/ModulesSection";
import { WhySection } from "@/components/home/WhySection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { TrialSection } from "@/components/home/TrialSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeFooter } from "@/components/home/HomeFooter";

const INK = "#090a0c";

export default function Home() {
  useEffect(() => {
    setPageSeo({
      title:
        "Bebasthapan ERP System for Nepal Businesses | Accounting, Inventory, Sales & CRM",
      description:
        "Bebasthapan ERP is a business management platform for Nepal businesses covering accounting, inventory, sales, purchase, CRM, invoices, HR, attendance, reports, and AI insights.",
      canonicalPath: "/home",
    });

    // The app shell paints a light gradient on <body>; the marketing page is dark,
    // so override it while mounted and restore on unmount.
    const { background, backgroundColor } = document.body.style;
    document.body.style.background = INK;
    document.body.style.backgroundColor = INK;

    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    const themeMeta = document.head.querySelector('meta[name="theme-color"]');
    const previousTheme = themeMeta?.getAttribute("content") ?? null;
    themeMeta?.setAttribute("content", INK);

    return () => {
      document.body.style.background = background;
      document.body.style.backgroundColor = backgroundColor;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      if (previousTheme !== null) themeMeta?.setAttribute("content", previousTheme);
    };
  }, []);

  return (
    <div className="premium-surface min-h-screen overflow-x-clip antialiased">
      <HomeNav />
      <main>
        <HomeHero />
        <TrustMarquee />
        <ModulesSection />
        <WhySection />
        <PlatformSection />
        <TrialSection />
        <FaqSection />
      </main>
      <HomeFooter />
    </div>
  );
}
