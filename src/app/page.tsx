import ContactUsSection from '@/components/sections/ContactUsSection';
import HelpingMethods from '@/components/sections/HelpingMethods';
import Hero from '@/components/sections/Hero';
import ShelterServices from '@/components/sections/ShelterServices';

export default function Home() {
  return (
    <main id="main" className="landing-layout">
      <Hero />
      <ShelterServices />
      <HelpingMethods />
      <ContactUsSection />
    </main>
  );
}
