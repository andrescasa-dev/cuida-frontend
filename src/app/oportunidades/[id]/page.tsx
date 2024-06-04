import PetCard from '@/components/molecules/PetCard';
import Icon from '@/components/ui/Icon';
import PetAvatar from '@/components/ui/PetAvatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import fetchHelper from '@/lib/fetchHelper';
import { cn, composeUrl } from '@/lib/utils';
import { PetsResponse } from '@/types/animals';
import { OpportunitiesResponse } from '@/types/necessities';
import { ShelterResponse } from '@/types/shelter';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

async function opportunityDetail({ params }: { params: { id: string } }) {
  const [errorShelterFetch, shelterData] = await fetchHelper<ShelterResponse>(
    `${process.env.BACKEND_URL}/api/refugios/${params.id}`,
  );

  const [errorOportunityFetch, opportunityData] =
    await fetchHelper<OpportunitiesResponse>(
      `${process.env.BACKEND_URL}/api/necesidades?filters[refugio][id]=${params.id}`,
    );

  const [errorPetsFetch, petsData] = await fetchHelper<PetsResponse>(
    `${process.env.BACKEND_URL}/api/animales?filters[refugio][id]=${params.id}`,
  );

  if (errorOportunityFetch !== undefined) {
    console.error(
      `error fetching opportunity detail data ${errorOportunityFetch.message}`,
    );
    return;
  }

  if (errorShelterFetch !== undefined) {
    console.error(`error fetching shelter detail data ${errorShelterFetch.message}`);
    return;
  }

  if (errorPetsFetch !== undefined) {
    console.error(`error fetching animals detail data ${errorPetsFetch.message}`);
    return;
  }

  const pets = petsData.data;
  const shelter = shelterData.data;
  const opportunities = opportunityData.data;
  const {
    nombre: shelterName,
    logo: { alternativeText: logoAlt, url: logoUrl },
  } = shelter;
  const month = '2024-04'; // todo: get the current time
  const contactNumber = '3224619838'; // replace with the actual contact number
  const whatsappLink = `https://api.whatsapp.com/send?phone=+57${contactNumber}&text=Hola%2C%20Estoy%20interesado%20en%20donar.`;

  return (
    <main className="main-layout mt-4 gap-y-5 sm:gap-y-14">
      <div className="flex flex-col sm:flex-row gap-y-10 sm:items-center sm:mt-5">
        <div className="flex gap-[1em] items-center">
          <Image
            className="shrink-0 size-14 sm:size-28  rounded-full aspect-square overflow-hidden border border-border"
            src={composeUrl(logoUrl)}
            aria-hidden="true"
            alt={logoAlt}
            height={58}
            width={58}
          />
          <h1 className="font-semibold text-xl xs:text-2xl sm:text-[1.75rem] lg:text-2xl">
            {shelterName}
          </h1>
        </div>
        <Button asChild>
          <a
            target="_blank"
            href={whatsappLink}
            className={
              'flex gap-[0.25em] flex-grow max-w-none sm:w-56 sm:shrink-0 sm:grow-0 sm:ml-auto'
            }
          >
            Donar <Icon aria-hidden={true} name="chevronRight" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-[inherit] md:gap-x-6 md:justify-between">
        <section className="md:shrink-0 ">
          <hgroup className="flex gap-2 items-center mb-3 sm:mb-5">
            <h2 className="font-semibold text-lg sm:text-[1.375rem] ">Gastos vigentes</h2>
            <time
              className="font-medium text-sm sm:text-base text-muted-text mt-1"
              dateTime={month}
            >
              {month}
            </time>
          </hgroup>
          <div className="grid xs:grid-cols-2 xs:grid-rows-3 sm:grid-rows-2 gap-4 sm:max-w-lg md:grid-rows-4 md:grid-cols-1">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.id}
                className={cn(
                  'px-6 py-6 xs:px-3 sm:p-5 border border-border bg-muted rounded-[1.124rem] relative min-h-28 max-h-40 sm:max-h-none sm:flex sm:flex-col sm:gap-4',
                  {
                    'row-span-2 sm:col-start-2 sm:row-start-1 md:col-start-auto md:row-start-auto':
                      opportunity.tipo === 'Cirugía',
                  },
                )}
              >
                <h3 className="font-semibold text-lg sm:text-xl first-letter:uppercase ">
                  {opportunity.tipo}
                </h3>
                <p className="font-semibold text-sm sm:text-base flex items-center gap-1 text-muted-text">
                  ${opportunity.meta_dinero}
                  {opportunity.documento_soporte && (
                    <a
                      target="_blank"
                      href={composeUrl(opportunity.documento_soporte[0].url)}
                    >
                      <Icon
                        aria-label="ir a documento de rendición de cuentas"
                        aria-hidden={false}
                        name="info"
                      />
                    </a>
                  )}
                </p>
                {opportunity.mascotas_beneficiadas && (
                  <ul className="flex -space-x-6 mt-2 ">
                    {opportunity.mascotas_beneficiadas.map((pet) => (
                      <li key={pet.id}>
                        <PetAvatar
                          className="size-12 "
                          avatarUrl={composeUrl(pet.fotos[0].url)}
                          color="yellow"
                        />
                      </li>
                    ))}
                  </ul>
                )}
                <dl className="absolute top-0 right-4 px-2 py-3 border border-border border-t-0 rounded-br-[0.5em] rounded-bl-[0.5em] bg-background">
                  <dt
                    className="text-[0.62rem] text-muted-text"
                    aria-label="cantidad de mascotas"
                  >
                    mascotas
                  </dt>
                  <dd className="font-medium text-base">
                    {opportunity.total_mascotas_beneficiadas === 0
                      ? 'Todas'
                      : opportunity.total_mascotas_beneficiadas}
                  </dd>
                </dl>
              </article>
            ))}
          </div>
        </section>
        <section className="flex flex-col md:-order-1 gap-6 overflow-hidden">
          <h2 className="font-semibold text-lg mb-3 sm:mb-5 sm:text-[1.375rem]">
            Mascotas beneficiadas
          </h2>
          <ScrollArea className="w-full pb-4">
            <div className="flex gap-2">
              {pets.map((pet) => (
                <PetCard key={pet.id} className="shrink-0" pet={pet} shelter={shelter} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Link
            className={cn(buttonVariants({ variant: 'link' }), 'self-end underline')}
            href={`/refugios/${shelter.id}`}
          >
            Conoce todas las mascotas <ArrowRight className="ml-1 size-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}

export default opportunityDetail;
