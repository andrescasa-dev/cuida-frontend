import Facebook from '@/components/ui/icons/Facebooks';
import Instagram from '@/components/ui/icons/Instagram';
import WhatsApp from '@/components/ui/icons/WhatsApp';
import Image from 'next/image';
import React from 'react';

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
  const {
    photo,
    title,
    description,
    countDogs,
    countCats,
    totalCount,
    facebookUrl,
    whatsappUrl,
    instagramUrl,
  } = refugioExample;
  const { url, alt } = photo;

  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <h1 className="font-semibold text-3xl">Refugios</h1>
      <div className="grid justify-center gap-6 lg:grid-cols-3">
        <article className="px-4 py-12 border-2 border-border rounded-md flex flex-col items-center gap-5 bg-muted max-w-[34rem]">
          <Image
            src={url}
            alt={alt}
            width={148}
            height={148}
            className="bg-gray-200 rounded-full border-4 border-border"
          />
          <h2 className="font-semibold text-2xl text-center">{title}</h2>
          <p className="text-base text-center max-w-[36ch]">{description}</p>
          <dl className="grid grid-cols-3 gap-x-1">
            <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Perros</dt>
              <dd className="font-medium text-lg">{countDogs}</dd>
            </div>
            <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input ">
              <dt className="font-bold text-xs">Gatos</dt>
              <dd className="font-medium text-lg">{countCats}</dd>
            </div>
            <div className="bg-background px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Total</dt>
              <dd className="font-medium text-lg">{totalCount}</dd>
            </div>
          </dl>
          <footer>
            <ul className="flex gap-1">
              <li>
                <a href={instagramUrl}>
                  <Instagram />
                </a>
              </li>
              <li>
                <a href={facebookUrl}>
                  <Facebook />
                </a>
              </li>
              <li>
                <a href={whatsappUrl}>
                  <WhatsApp />
                </a>
              </li>
            </ul>
          </footer>
        </article>
        <article className="px-4 py-12 border-2 border-border rounded-md flex flex-col items-center gap-5 bg-muted max-w-[34rem]">
          <Image
            src={url}
            alt={alt}
            width={148}
            height={148}
            className="bg-gray-200 rounded-full border-4 border-border"
          />
          <h2 className="font-semibold text-2xl text-center">{title}</h2>
          <p className="text-base text-center max-w-[36ch]">{description}</p>
          <dl className="grid grid-cols-3 gap-x-1">
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Perros</dt>
              <dd className="font-medium text-lg">{countDogs}</dd>
            </div>
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input ">
              <dt className="font-bold text-xs">Gatos</dt>
              <dd className="font-medium text-lg">{countCats}</dd>
            </div>
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Total</dt>
              <dd className="font-medium text-lg">{totalCount}</dd>
            </div>
          </dl>
          <footer>
            <ul className="flex gap-1">
              <li>
                <a href={instagramUrl}>
                  <Instagram />
                </a>
              </li>
              <li>
                <a href={facebookUrl}>
                  <Facebook />
                </a>
              </li>
              <li>
                <a href={whatsappUrl}>
                  <WhatsApp />
                </a>
              </li>
            </ul>
          </footer>
        </article>
        <article className="px-4 py-12 border-2 border-border rounded-md flex flex-col items-center gap-5 bg-muted max-w-[34rem]">
          <Image
            src={url}
            alt={alt}
            width={148}
            height={148}
            className="bg-gray-200 rounded-full border-4 border-border"
          />
          <h2 className="font-semibold text-2xl text-center">{title}</h2>
          <p className="text-base text-center max-w-[36ch]">{description}</p>
          <dl className="grid grid-cols-3 gap-x-1">
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Perros</dt>
              <dd className="font-medium text-lg">{countDogs}</dd>
            </div>
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input ">
              <dt className="font-bold text-xs">Gatos</dt>
              <dd className="font-medium text-lg">{countCats}</dd>
            </div>
            <div className="bg-white px-3 py-3 flex flex-col items-center rounded-input">
              <dt className="font-bold text-xs">Total</dt>
              <dd className="font-medium text-lg">{totalCount}</dd>
            </div>
          </dl>
          <footer>
            <ul className="flex gap-1">
              <li>
                <a href={instagramUrl}>
                  <Instagram />
                </a>
              </li>
              <li>
                <a href={facebookUrl}>
                  <Facebook />
                </a>
              </li>
              <li>
                <a href={whatsappUrl}>
                  <WhatsApp />
                </a>
              </li>
            </ul>
          </footer>
        </article>
      </div>
    </main>
  );
}

export default ShelterPage;
