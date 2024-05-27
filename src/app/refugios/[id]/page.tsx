import CTAButton from '@/components/molecules/CTAButton';
import OpportunityCard from '@/components/molecules/OpportunityCard';
import PetCard from '@/components/molecules/PetCard';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Files, Sparkle } from 'lucide-react';
import Image from 'next/image';

const shelterExample = {
  banner: {
    bannerUrl: '/womanfeeding.jpg',
    bannerAlt: 'a woman feeding a pet',
  },
  avatar: {
    avatarUrl: '/La_Tropa_Gatuna_De_Yanet 1.png',
    avatarAlt: 'logo la tropa gatuna',
  },
  title: 'Fundación La tropa Gatuna de Yanet',
  dogCount: 23,
  catCount: 23,
  totalPets: 86,
  services: ['service1', 'service2', 'service3'],
  contactPhone: 123,
  contactMethods: [
    { type: 'instagram' as const, url: '#' },
    { type: 'faceBook' as const, url: '#' },
    { type: 'email' as const, url: '#' },
    { type: 'whatsApp' as const, url: '#' },
  ],
  paymentMethods: [
    { type: 'nequi', number: 123 },
    { type: 'Bancolombia', number: 123 },
  ],
};

const dummyPet = {
  name: 'Milu',
  photo: {
    url: '/dog2-removebg-preview.png',
    alt: 'Milu the dog',
  },
  sexo: 'Female',
  juventud: 'Young',
};

const dummyShelter = {
  logo: {
    url: '/La_Tropa_Gatuna_De_Yanet 1.png',
    alt: 'Shelter logo',
  },
};

async function shelterDetail() {
  const {
    banner,
    services,
    title,
    dogCount,
    catCount,
    totalPets,
    avatar,
    contactPhone,
    contactMethods,
    paymentMethods,
  } = shelterExample;
  const { bannerAlt, bannerUrl } = banner;
  const { avatarAlt, avatarUrl } = avatar;

  const counters = [
    { type: 'perros', count: dogCount, iconName: 'dog' as const },
    { type: 'gatos', count: catCount, iconName: 'cat' as const },
    { type: 'total', count: totalPets, iconName: 'footPrint' as const },
  ];
  const donationLink = contactPhone + '#';
  return (
    <div className="main-layout flex-grow relative lg:gap-x-5 lg:grid-cols-[minmax(3.5rem,_1fr)_minmax(0px,_75rem)_minmax(0px,_17.5rem)_minmax(3.5rem,_1fr)]">
      <div
        aria-hidden={true}
        className=" absolute w-full brake-main-layout lg:col-start-2 lg:col-end-3 h-28 sm:h-32 lg:h-[160px] overflow-hidden object-center "
      >
        <Image
          className="object-cover -z-10"
          src={bannerUrl}
          fill
          sizes="300px"
          alt={bannerAlt}
        />
      </div>
      <main className="mt-4 relative">
        <header className="lg:relative grid gap-y-10 justify-items-center mt-12 sm:mt-16 sm:gap-y-0 sm:grid-cols-[max-content] sm:h-[240px] sm:items-end lg:justify-items-start lg:gap-x-3">
          <div className="size-[112px] sm:size-[168px] relative sm:row-span-3 sm:row-start-1">
            <Image
              aria-hidden={true}
              src={avatarUrl}
              alt={avatarAlt}
              sizes="300px"
              fill
            />
          </div>
          <h1 className="font-bold text-xl text-center max-sm:-mt-8 sm:row-start-2 sm:text-2xl capitalize">
            {title}
          </h1>
          <dl
            className="grid grid-cols-3 gap-1 sm:row-start-3  mx-2"
            aria-label="cantidad de mascotas"
          >
            {counters.map(({ type, count, iconName }) => (
              <div
                key={type}
                className="bg-muted rounded-md grid justify-items-center items-center gap-0.5 px-5 py-2.5 md:px-4 md:py-3 md:gap-y-0 lg:px-6 lg:gap-x-1 sm:p-2 sm:h-fit"
              >
                <Icon
                  name={iconName}
                  className="size-7 md:size-full md:row-span-2 md:row-start-1"
                />
                <dt className="text-xs font-medium md:row-start-1 capitalize">{type}</dt>
                <dd className="font-bold text-lg md:text-base md:row-start-2">{count}</dd>
              </div>
            ))}
          </dl>
          <ul className="brake-main-layout w-full overflow-hidden flex gap-8 sm:hidden">
            {services.map((service) => (
              <li key={service} className="flex gap-1.5 items-center text-sm  capitalize">
                <Sparkle className="size-4" /> {service}
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full  gap-2.5 sm:row-start-2 sm:row-span-2 sm:my-auto sm:h-full sm:justify-center">
            <CTAButton className="max-w-none " href={donationLink}>
              Donar
            </CTAButton>
            <Button className="max-w-none lg:hidden" variant={'secondary'}>
              Ver Pasarelas
            </Button>
          </div>
          <div className="lg:hidden flex gap-1.5 sm:row-start-4 lg:justify-self-center">
            {contactMethods.map(({ type, url }) => {
              return (
                <a href={url} key={type}>
                  <Icon className="size-5" name={type} />
                </a>
              );
            })}
          </div>
        </header>
        <Separator className="opacity-20 my-4" />
        <Tabs defaultValue="mascotas" className="grid w-full gap-4">
          <TabsList>
            <TabsTrigger value="mascotas">Mascotas</TabsTrigger>
            <TabsTrigger value="necesidades">Necesidades</TabsTrigger>
          </TabsList>
          <TabsContent value="mascotas">
            <PetsTabContent />
          </TabsContent>
          <TabsContent value="necesidades">
            <OpportunitiesTabContent />
          </TabsContent>
        </Tabs>
      </main>
      <aside className="w-full hidden lg:flex col-start-3 border border-border rounded-[0.75rem] bg-background px-4 py-8 flex-col gap-14">
        <section>
          <h2 className="text-lg font-semibold mb-4">Nuestros servicios</h2>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service} className="flex gap-2 items-center text-sm  capitalize">
                <Sparkle className="size-4" /> {service}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Pasarelas</h2>
          <ul className="flex flex-col gap-2">
            {paymentMethods.map(({ number, type }) => (
              <li
                key={type}
                className="flex gap-2 items-center text-sm capitalize bg-muted rounded-sm py-1"
              >
                <Files className="size-4" /> {type}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="flex flex-col gap-2">
            {contactMethods.map(({ type, url }) => (
              <li key={type}>
                <a className="flex gap-2 items-center text-sm capitalize" href={url}>
                  <Icon name={type} /> {'name'}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}

function PetsTabContent() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(134px,1fr))] gap-1.5 w-full sm:grid-cols-[repeat(auto-fit,_minmax(208px,1fr))]">
      <PetCard className=" max-w-none w-full" pet={dummyPet} />
      <PetCard className=" max-w-none w-full" pet={dummyPet} />
      <PetCard className=" max-w-none w-full" pet={dummyPet} />
      <PetCard className=" max-w-none w-full" pet={dummyPet} />
    </div>
  );
}

function OpportunitiesTabContent() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(134px,1fr))] gap-1.5 w-full sm:grid-cols-[repeat(auto-fit,_minmax(208px,1fr))]">
      <OpportunityCard opportunity={undefined} />
      <OpportunityCard opportunity={undefined} />
      <OpportunityCard opportunity={undefined} />
    </div>
  );
}

export default shelterDetail;
