import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

/*
TODO
- proper responsive image
*/

function PetCard({ pet, shelter, className }: { className?: string; pet; shelter }) {
  const { photo } = pet;
  return (
    <article
      className={cn(
        'bg-muted flex flex-col justify-end rounded-[1.5rem] h-56 border border-border w-48 sm:w-52 sm:h-[17.25rem] lg:w-72 lg:h-[22.5rem]',
        className,
      )}
    >
      <div className="relative">
        <Image
          className="self-center absolute bottom-0 left-0 right-0 mx-auto size-[7rem] sm:size-[9rem]"
          src={photo.url}
          height={111}
          width={111}
          alt={photo.alt}
        />
      </div>
      <div className="flex bg-background rounded-[inherit] rounded-t-none px-5 py-5 justify-between">
        <div>
          <h3 className="font-medium text-lg uppercase mb-2 sm:font-semibold text-start">
            Milu
          </h3>
          <dl className="flex gap-2">
            <dt className="sr-only">Sexo</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252] ">
              {pet.sexo}
            </dd>
            <dt className="sr-only">Juventud</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252]">
              {pet.juventud}
            </dd>
          </dl>
        </div>
        <Image
          className="shrink-0 self-center lg:size-12"
          src={shelter.logo.url}
          alt={shelter.logo.alt}
          height={34}
          width={34}
        />
      </div>
    </article>
  );
}

export default PetCard;
