import { cn, composeUrl, getSize, getYouthfulness } from '@/lib/utils';
import { Pet, ShelterNoRep } from '@/types/animals';
import Image from 'next/image';
import React from 'react';
import Blob from '../ui/icons/Blob';

function PetCard({
  pet,
  shelter,
  className,
}: {
  className?: string;
  pet: Pet;
  shelter?: ShelterNoRep;
}) {
  const { fotos, edad: age, peso: weight, especie: specie, nombre: name, id } = pet;
  const size = getSize(weight);
  const youthfulness = getYouthfulness(age);
  const { alternativeText: PhotoAlt, url: PhotoUrl } = fotos[0];
  return (
    <article
      className={cn(
        'max-[320px]:max-w-[60vw] bg-muted flex flex-col justify-end rounded-[1.5rem] h-56 border border-border min-w-32 sm:h-[17.25rem] lg:h-[22.5rem]',
        className,
      )}
    >
      <div className="relative h-full">
        <Blob className={'absolute inset-y-0 top-6 h-[100%] w-[100%]'} baseId={id} />
        <Image
          className="self-center absolute bottom-0 left-0 right-0 mx-auto size-[7rem] sm:size-[9rem] lg:size-[12rem] object-cover"
          src={composeUrl(PhotoUrl)}
          height={150}
          width={150}
          alt={PhotoAlt || `Foto de un ${specie} ${size} y ${youthfulness}`}
        />
      </div>
      <div className="grid grid-cols-2 bg-background rounded-[inherit] rounded-t-none px-4 pt-2 pb-2.5 sm:px-5 sm:py-5 z-10">
        <h3 className="font-medium sm:text-lg uppercase sm:font-semibold text-start self-center">
          {name}
        </h3>
        <dl className="flex gap-2 row-start-2">
          <dt className="sr-only">Sexo</dt>
          <dd className="font-medium text-xs capitalize lg:text-base text-[#525252] ">
            {pet.sexo}
          </dd>
          <dt className="sr-only">Edad</dt>
          <dd className="font-medium text-xs capitalize lg:text-base text-[#525252]">
            {youthfulness}
          </dd>
        </dl>
        {shelter && (
          <Image
            className="shrink-0 lg:size-12 rounded-full justify-self-end"
            src={composeUrl(shelter.logo.url)}
            alt={shelter.logo.alternativeText}
            height={30}
            width={30}
          />
        )}
      </div>
    </article>
  );
}

export default PetCard;
