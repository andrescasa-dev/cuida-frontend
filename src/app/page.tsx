import ContactUsSection from '@/components/sections/ContactUsSection';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import HelpingMethods from '@/components/sections/HelpingMethods';
import Hero from '@/components/sections/Hero';
import ShelterServices from '@/components/sections/ShelterServices';

export default function Home() {
  return (
    <>
      <Header /> {/*should be in the layout*/}
      <Hero />
      <ShelterServices />
      <HelpingMethods />
      <ContactUsSection />
      <Footer />
    </>
  );
}
