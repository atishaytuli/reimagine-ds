import { BenefitsSection } from "@/components/layout/sections/think";
import { CommunitySection } from "@/components/layout/sections/careers";
import { ContactSection } from "@/components/layout/sections/contact";
import { FeaturesSection } from "@/components/layout/sections/about";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/commitment";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/partners";
import { TestimonialSection } from "@/components/layout/sections/result";
import { Expertise } from "@/components/layout/sections/experties";
import { Method } from "@/components/layout/sections/method"
import { MarqueeDemo } from "@/components/layout/sections/reviews";
import { Empowering } from "@/components/layout/sections/empowering";

export const metadata = {
  title: "Designing Solutions",
  description: "Designing Solutions",
  openGraph: {
    type: "website",
    url: "https://github.com /nobruf/designing-solutions.git",
    title: "Designing Solutions",
    description: "Designing Solutions",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Designing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/designing-solutions.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Empowering />
      <FeaturesSection />
      <BenefitsSection />
      <Expertise />
      <ServicesSection />
      <TestimonialSection />
      <Method />
      <SponsorsSection />
      <PricingSection />
      <MarqueeDemo />
      <CommunitySection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
