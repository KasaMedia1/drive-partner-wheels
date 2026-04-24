import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { SegmentSelector } from "@/components/sections/SegmentSelector";
import { QuickBooking } from "@/components/sections/QuickBooking";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SITE } from "@/config/site";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: "Inchirieri masini, scutere si biciclete electrice pentru soferi Uber, Bolt si curieri Glovo, Wolt, Bolt Food.",
    address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: SITE.city, addressCountry: "RO" },
    telephone: SITE.phoneE164,
    areaServed: SITE.city,
  };
  return (
    <SiteLayout>
      <Seo
        title="DrivePartner | Inchiriere masini si scutere pentru Uber, Bolt si curieri"
        description="Inchiriaza masini, scutere si biciclete electrice pentru Uber, Bolt, Glovo si Wolt. Asistenta 24/7, asigurare completa, vehicul gata in 24h."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <QuickBooking />
      <SegmentSelector />
      <FeaturedFleet />
      <WhyUs />
      <HowItWorks />
      <PriceCalculator />
      <Testimonials />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
};

export default Index;
