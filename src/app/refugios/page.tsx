import Icon from '@/components/ui/Icon';
import fetchHelper from '@/lib/fetchHelper';
import { composeUrl } from '@/lib/utils';
import { SheltersResponse } from '@/types/shelters';
import Image from 'next/image';
import Link from 'next/link';

const refugioExample = {
  photo: {
    url: '/La_Tropa_Gatuna_De_Yanet 1.png',
    alt: 'logo de la tropa gatuna',
  },
  title: 'La Tropa Gatuna De Yanet',
  description:
    'brindamos refugio y amor a animales necesitados, pero tu apoyo es esencial. ¡Ayúdanos a seguir salvando vidas!',
  countDogs: '9',
  countCats: '10',
  totalCount: '19',
  facebookUrl: '#',
  whatsappUrl: '#',
  instagramUrl: '#',
};

async function ShelterPage() {
  const [errorPetsFetch, sheltersData] = await fetchHelper<SheltersResponse>(
    `${process.env.BACKEND_URL}/api/refugios`,
  );

  if (errorPetsFetch !== undefined) {
    console.error(`error fetching opportunity detail data ${errorPetsFetch.message}`);
    return;
  }
  const shelters = sheltersData.data;

  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <h1 className="font-semibold text-3xl">Refugios</h1>
      <div className="grid justify-center gap-6 lg:grid-cols-3">
        {shelters.map((shelter) => {
          const {
            id,
            logo,
            nombre: name,
            descripcion: description,
            total_perros: countDogs,
            total_gatos: countCats,
            total_mascotas: totalCount,
            redes: socialNetworks,
          } = shelter;
          const { url, alternativeText: alt } = logo;
          return (
            <article
              key={id}
              className="px-4 py-12 border-2 border-border rounded-md flex flex-col items-center gap-5 bg-muted max-w-[34rem]"
            >
              <Link
                className="opacity-0 after:absolute after:inset-0 after:z-10"
                aria-label="ir a el detalle del refugio"
                href={`refugios/${shelter.id}`}
              />
              <Image
                src={composeUrl(url)}
                alt={alt}
                width={148}
                height={148}
                className="bg-gray-200 rounded-full aspect-square border-4 border-border "
              />
              <h2 className="font-semibold text-2xl text-center">{name}</h2>
              <p className="text-base text-center max-w-[36ch]">{description}</p>
              <dl className="grid grid-cols-3 gap-x-1">
                <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input">
                  <dt className="font-medium text-xs">Perros</dt>
                  <dd className="font-medium text-lg">{countDogs}</dd>
                </div>
                <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input">
                  <dt className="font-medium text-xs">Total</dt>
                  <dd className="font-medium text-lg">{totalCount}</dd>
                </div>
                <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input ">
                  <dt className="font-medium text-xs">Gatos</dt>
                  <dd className="font-medium text-lg">{countCats}</dd>
                </div>
              </dl>
              <footer className="z-20">
                <ul className="flex gap-1">
                  {socialNetworks.map(({ redSocial, url }) => (
                    <li key={redSocial}>
                      <a href={url}>
                        <Icon name={redSocial === 'facebook' ? 'faceBook' : redSocial} />
                      </a>
                    </li>
                  ))}
                </ul>
              </footer>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default ShelterPage;
