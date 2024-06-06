import CopyButton from '@/components/molecules/CopyButton';
import OpportunityCard from '@/components/molecules/OpportunityCard';
import ModalAdoption from '@/components/organisms/ModalAdoption';
import Icon from '@/components/ui/Icon';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import fetchHelper from '@/lib/fetchHelper';
import { cn, composeUrl } from '@/lib/utils';
import { PetsResponse } from '@/types/animals';
import { OpportunitiesResponse } from '@/types/necessities';
import { PaymentGateway, ShelterResponse } from '@/types/shelter';
import { Sparkle } from 'lucide-react';
import Image from 'next/image';

async function shelterDetail({ params }: { params: { id: string } }) {
  const [errorShelterFetch, shelterData] = await fetchHelper<ShelterResponse>(
    `${process.env.BACKEND_URL}/api/refugios/${params.id}`,
  );

  if (errorShelterFetch !== undefined) {
    console.error('error while trying to fetch shelter data', errorShelterFetch.message);

    return <div>ups error al traer la información</div>;
  }
  const shelter = shelterData.data;

  const {
    servicios: services,
    nombre: name,
    total_perros: dogCount,
    total_gatos: catCount,
    total_mascotas: totalPets,
    logo: avatar,
    whatsapp: whatsapp,
    redes: socialNetworks,
    email,
    pasarelas: paymentMethods,
  } = shelter;
  const contactMethods = [
    { type: 'email' as const, url: `mailto:${email}`, label: email },
    {
      type: 'whatsApp' as const,
      url: `https://wa.me/${whatsapp}`,
      label: `+57 ${whatsapp}`,
    },
    ...socialNetworks.map((sn) => ({
      type: sn.redSocial,
      url: sn.url,
      label: `@${sn.url
        .split('/')
        .reverse()
        .find((e) => e !== '')}`,
    })),
  ];
  // const { bannerAlt, bannerUrl } = banner;
  const { alternativeText: avatarAlt, url: avatarUrl } = avatar;

  const counters = [
    { type: 'perros', count: dogCount, iconName: 'dog' as const },
    { type: 'gatos', count: catCount, iconName: 'cat' as const },
    { type: 'total', count: totalPets, iconName: 'footPrint' as const },
  ];
  const donationLink = `https://api.whatsapp.com/send?phone=+57${whatsapp}&text=Hola%2C%20Estoy%20interesado%20en%20donar.`;
  return (
    <div className="main-layout flex-grow relative lg:gap-x-5 lg:grid-cols-[minmax(3.5rem,_1fr)_minmax(0px,_75rem)_minmax(0px,_17.5rem)_minmax(3.5rem,_1fr)]">
      <div
        aria-hidden={true}
        className=" absolute w-full brake-main-layout lg:col-start-2 lg:col-end-3 h-28 sm:h-32 lg:h-[160px] overflow-hidden object-center "
      >
        <Image
          className="object-cover -z-10"
          src={'/womanfeeding.jpg'}
          fill
          sizes="300px"
          alt={'a woman feeding some dogs'}
        />
      </div>
      <main className="mt-4 relative">
        <header className="lg:relative grid gap-y-10 justify-items-center mt-12 sm:mt-16 sm:gap-y-0 sm:grid-cols-[max-content] sm:h-[240px] sm:items-end lg:justify-items-start lg:gap-x-3">
          <div className="size-[112px] sm:size-[168px] relative sm:row-span-3 sm:row-start-1">
            <Image
              className="rounded-full border border-border"
              aria-hidden={true}
              src={composeUrl(avatarUrl)}
              alt={avatarAlt}
              sizes="300px"
              fill
            />
          </div>
          <h1 className="font-bold text-xl text-center max-sm:-mt-8 sm:row-start-2 sm:text-2xl capitalize">
            {name}
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
                  className="size-7 md:size-full sm:max-lg:hidden md:row-span-2 md:row-start-1"
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
          <div className="flex flex-col w-full gap-2.5 sm:row-start-2 sm:row-span-2 sm:my-auto sm:h-full sm:justify-center">
            <Button asChild>
              <a
                target="_blank"
                href={donationLink}
                className={
                  'flex gap-[0.25em] flex-grow max-w-none sm:w-56 sm:shrink-0 sm:grow-0 sm:ml-auto'
                }
              >
                Donar <Icon aria-hidden={true} name="chevronRight" />
              </a>
            </Button>
            <Dialog>
              <DialogTrigger
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'max-w-none sm:w-56 lg:hidden sm:ml-auto',
                )}
              >
                Ver Pasarelas
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Pasarelas</DialogTitle>
                <PaymentMethodsList paymentMethods={paymentMethods} />
              </DialogContent>
            </Dialog>
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
            <PetsTabContent shelterId={params.id} />
          </TabsContent>
          <TabsContent value="necesidades">
            <OpportunitiesTabContent shelterId={params.id} />
          </TabsContent>
        </Tabs>
      </main>
      <aside className="w-full hidden lg:flex col-start-3 border border-border rounded-[0.75rem] bg-background px-4 py-8 flex-col gap-14">
        <section>
          <h2 className="text-lg font-semibold mb-4">Nuestros Servicios</h2>
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
          <PaymentMethodsList paymentMethods={paymentMethods} />
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="flex flex-col gap-2">
            {contactMethods.map(({ type, url, label }) => (
              <li key={type}>
                <a
                  target="_blank"
                  className="flex gap-2 items-center text-sm capitalize"
                  href={url}
                >
                  <Icon name={type} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}

const PaymentMethodsList = ({ paymentMethods }: { paymentMethods: PaymentGateway[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      {paymentMethods.map(({ numCuenta: number, metodo: type }) => (
        <li
          key={type}
          className="flex gap-2 items-center text-sm capitalize bg-muted rounded-sm py-1"
        >
          <CopyButton text={String(number)}>
            {type} - ${number}
          </CopyButton>
        </li>
      ))}
    </ul>
  );
};

async function PetsTabContent({ shelterId: shleterId }: { shelterId: string }) {
  const [errorPetsFetch, petsData] = await fetchHelper<PetsResponse>(
    `${process.env.BACKEND_URL}/api/animales?filters[refugio][id]=${shleterId}`,
  );

  if (errorPetsFetch !== undefined) {
    console.error(`error fetching shelter's pets data ${errorPetsFetch.message}`);
    return;
  }
  if (petsData.data.length === 0) {
    return <div>Sin animales</div>;
  }

  const pets = petsData.data;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(134px,1fr))] gap-1.5 w-full sm:grid-cols-[repeat(auto-fit,_minmax(208px,1fr))]">
      {pets.map((pet) => (
        <ModalAdoption key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

async function OpportunitiesTabContent({ shelterId: shleterId }: { shelterId: string }) {
  const [errorOpportunitiesFetch, opportunitiesData] =
    await fetchHelper<OpportunitiesResponse>(
      `${process.env.BACKEND_URL}/api/necesidades?filters[refugio][id]=${shleterId}`,
    );

  if (errorOpportunitiesFetch !== undefined) {
    console.error(
      `error fetching shelter detail data ${errorOpportunitiesFetch.message}`,
    );
    return;
  }

  if (opportunitiesData.data.length === 0) {
    return <div>Sin necesidades</div>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(134px,1fr))] gap-1.5 w-full sm:grid-cols-[repeat(auto-fit,_minmax(208px,1fr))]">
      {opportunitiesData.data.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}

export default shelterDetail;
