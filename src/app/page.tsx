import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ShelterServices from '@/components/sections/ShelterServices';

export default function Home() {
  return (
    <>
      <Header /> {/*should be in the layout*/}
      <Hero />
      <ShelterServices />
    </>
  );
}
