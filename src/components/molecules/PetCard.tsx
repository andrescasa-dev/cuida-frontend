import { cn, composeUrl, getYouthfulness } from '@/lib/utils';
import { Pet, Shelter } from '@/types/animals';
import Image from 'next/image';
import React from 'react';

/*
TODO
- proper responsive image
*/

function PetCard({
  pet,
  shelter,
  className,
}: {
  className?: string;
  pet: Pet;
  shelter?: Shelter;
}) {
  const { fotos, edad: age, nombre: name } = pet;
  const youthfulness = getYouthfulness(age);
  const { alternativeText: PhotoAlt, url: PhotoUrl } = fotos[0];
  return (
    <article
      className={cn(
        'bg-muted flex flex-col justify-end rounded-[1.5rem] h-56 border border-border min-w-32 max-sm:max-w-44 sm:h-[17.25rem] lg:h-[22.5rem]',
        className,
      )}
    >
      <div className="relative">
        <Image
          className="self-center absolute bottom-0 left-0 right-0 mx-auto size-[7rem] sm:size-[9rem]"
          src={composeUrl(PhotoUrl)}
          height={111}
          width={111}
          alt={PhotoAlt}
        />
      </div>
      <div className="flex bg-background rounded-[inherit] rounded-t-none px-4 pt-1.5 pb-2.5 sm:px-5 sm:py-5 justify-between">
        <div>
          <h3 className="font-medium text-lg uppercase mb-2 sm:font-semibold text-start">
            {name}
          </h3>
          <dl className="flex gap-2">
            <dt className="sr-only">Sexo</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252] ">
              {pet.sexo}
            </dd>
            <dt className="sr-only">Edad</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252]">
              {youthfulness}
            </dd>
          </dl>
        </div>
        {shelter && (
          <Image
            className="shrink-0 self-center lg:size-12 rounded-full"
            src={composeUrl(shelter.logo.url)}
            alt={shelter.logo.alternativeText}
            height={34}
            width={34}
          />
        )}
      </div>
    </article>
  );
}

export default PetCard;
