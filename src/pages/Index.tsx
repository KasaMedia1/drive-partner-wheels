import { SiteLayout } from "@/components/layout/SiteLayout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { RentalCategoriesPreview } from "@/components/sections/RentalCategoriesPreview";
import { WhyUs } from "@/components/sections/WhyUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SITE } from "@/config/site";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: "Inchirieri scutere, biciclete electrice si masini pentru curieri, soferi Uber, Bolt si naveta zilnica in Bucuresti.",
    address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: SITE.city, addressCountry: "RO" },
    telephone: SITE.phoneE164,
    areaServed: SITE.city,
  };
  return (
    <SiteLayout>
      <Seo
        title="DriveRent | Inchiriere scutere, biciclete electrice si masini in Bucuresti"
        description="Mobilitate urbana pentru curieri, ridesharing si naveta. Scutere 50cc/125cc, fara permis, electrice, biciclete si masini hibride. Pregatite imediat."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <RentalCategoriesPreview />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
};

export default Index;
