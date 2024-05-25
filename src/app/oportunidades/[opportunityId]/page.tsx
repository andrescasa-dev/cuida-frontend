import CTAButton from '@/components/molecules/CTAButton';
import PetCard from '@/components/molecules/PetCard';
import Icon from '@/components/ui/Icon';
import PetAvatar from '@/components/ui/PetAvatar';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import fetchHelper from '@/lib/fetchHelper';
import { cn } from '@/lib/utils';
import { OpportunityResponse } from '@/types/necessity';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/*
Ojo
- el logo de los refugios deberia ser un svg

Refactor
- main .layout-main siempre se repite
- card de necesidad, short variation
- función para obtener el precio formateado
- sacar utility class de las font que que usan [mycustomvar]
- utility class for border radius
- text muted se repite
*/

async function opportunityDetail({ params }: { params: { opportunityId: string } }) {
  const [error, data] = await fetchHelper<OpportunityResponse>(
    `${process.env.BACKEND_URL}/api/necesidades/${params.opportunityId}`,
  );

  if (error !== undefined) {
    // por el momento la pagina sigue cargando a pesar de si hay un error en el fetching
    // todo: manejar correctamente el error del fetch
    console.error(`error fetching opportunity detail data ${error.message}`);
  }

  const necessityExample = {
    targetMoth: '2024-04',
    necessities: [
      { id: 1, totalPets: 74, type: 'alimento' },
      { id: 1, totalPets: 74, type: 'medicina' },
      {
        id: 1,
        totalPets: 74,
        type: 'cirugia',
        pets: [
          {
            id: 1,
            photo: {
              url: '/dog2-removebg-preview.png',
              alt: 'a dog',
              name: 'Milu',
            },
          },
          {
            id: 2,
            photo: {
              url: '/dog2-removebg-preview.png',
              alt: 'a dog',
              name: 'Milu',
            },
          },
        ],
      },
    ],
    pets: [
      {
        id: 1,
        photo: {
          url: '/dog2-removebg-preview.png',
          alt: 'a dog',
        },
        sexo: 'hembra',
        juventud: 'Joven',
      },
      {
        id: 2,
        photo: {
          url: '/dog2-removebg-preview.png',
          alt: 'a dog',
        },
        sexo: 'hembra',
        juventud: 'Joven',
      },
      {
        id: 3,
        photo: {
          url: '/dog2-removebg-preview.png',
          alt: 'a dog',
        },
        sexo: 'hembra',
        juventud: 'Joven',
      },
    ],
    shelter: {
      logo: {
        url: '/La_Tropa_Gatuna_De_Yanet 1.png',
        alt: 'logo',
      },
    },
  };

  if (data === undefined) {
    // todo: manejar correctamente el error del fetch
    return;
  }

  const shelter = data.data.attributes.refugio;
  const refugioLogoURL = shelter.data.attributes.logo.data.attributes.url;
  const refugioLogoAlt = shelter.data.attributes.logo.data.attributes.alternativeText;
  const month = '2024-04'; // todo: get the current time

  return (
    <main className="main-layout mt-4 gap-y-5 sm:gap-y-14">
      <div className="flex flex-col sm:flex-row gap-y-10 sm:items-center sm:mt-5">
        <div className="flex gap-[1em] items-center">
          <Image
            className="shrink-0 size-14 sm:size-28  rounded-full aspect-square overflow-hidden border border-border"
            src={`${process.env.BACKEND_URL}${refugioLogoURL}`}
            aria-hidden="true"
            alt={refugioLogoAlt}
            height={58}
            width={58}
          />
          <h1 className="font-semibold text-xl xs:text-2xl sm:text-[1.75rem] lg:text-2xl">
            Fundación La tropa Gatuna de Yanet
          </h1>
        </div>
        <CTAButton
          className="flex-grow max-w-none sm:w-56 sm:shrink-0 sm:grow-0 sm:ml-auto"
          href="#"
        >
          Donar
        </CTAButton>
      </div>

      <div className="flex flex-col md:flex-row gap-[inherit] md:gap-x-6 md:justify-between">
        <section className="md:shrink-0 ">
          <hgroup className="flex gap-2 items-center mb-3 sm:mb-5">
            <h2 className="font-semibold text-lg sm:text-[1.375rem] ">Gastos del més</h2>
            <time
              className="font-medium text-sm sm:text-base text-muted-text"
              dateTime={month}
            >
              {month}
            </time>
          </hgroup>
          <div className="grid xs:grid-cols-2 xs:grid-rows-3 sm:grid-rows-2 gap-4 sm:max-w-lg md:grid-rows-4 md:grid-cols-1">
            {necessityExample.necessities.map((necessity) => (
              <article
                key={necessity.id}
                className={cn(
                  'px-6 py-6 xs:px-3 sm:p-5 border border-border bg-muted rounded-[1.124rem] relative min-h-28 max-h-40 sm:max-h-none sm:flex sm:flex-col sm:gap-4',
                  {
                    'row-span-2 sm:col-start-2 sm:row-start-1 md:col-start-auto md:row-start-auto':
                      necessity.type === 'cirugia',
                  },
                )}
              >
                <h3 className="font-semibold text-lg sm:text-xl first-letter:uppercase ">
                  alimento
                </h3>
                <p className="font-semibold text-sm sm:text-base flex items-center gap-1 text-muted-text">
                  200,000$
                  <a href="">
                    <Icon
                      aria-label="ir a documento de rendición de cuentas"
                      aria-hidden={false}
                      name="info"
                    />
                  </a>
                </p>
                {necessity.pets && (
                  <ul className="flex -space-x-6 mt-2 ">
                    {necessity.pets.map((pet) => (
                      <li key={pet.id}>
                        <PetAvatar
                          className="size-12 "
                          avatarUrl={pet.photo.url}
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
                    {necessityExample.necessities[0].totalPets}
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
              {necessityExample.pets.map((pet) => (
                <PetCard
                  key={pet.id}
                  className="shrink-0"
                  pet={pet}
                  shelter={necessityExample.shelter}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Link
            className={cn(buttonVariants({ variant: 'link' }), 'self-end underline')}
            href="#"
          >
            Conoce todas las mascotas <ArrowRight className="ml-1 size-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}

export default opportunityDetail;
