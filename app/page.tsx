import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TrustSection } from '@/components/trust-section';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { LocationMarketSection } from '@/components/location-market-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <TrustSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="products">
          <ProductsSection />
        </section>
        
        <section id="why-us">
          <WhyChooseUsSection />
        </section>
        
        <HowItWorksSection />
        <LocationMarketSection />
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}