import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Icon from '@/components/ui/Icon';

const opportunityExample = {
  title: 'Alimento',
  type: 'Alimentos',
  quantity: 2000,
  totalPets: 74,
  photo: {
    url: '/alimento.png',
    alt: 'Un plato con purina',
  },
};

function OpportunityCard({
  opportunity = opportunityExample,
  shelter,
  className,
}: {
  className?: string;
  opportunity;
  shelter?;
}) {
  const { photo, title, type, quantity, totalPets } = opportunity;
  const quantityString = quantity + '$';
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
          src={photo.url}
          height={111}
          width={111}
          alt={photo.alt}
        />
      </div>
      <div className="flex bg-background rounded-[inherit] rounded-t-none px-4 pt-1.5 pb-2.5 sm:px-5 sm:py-5 justify-between">
        <div>
          <h3 className="font-medium text-lg capitalize mb-2 sm:font-semibold text-start">
            {title}
          </h3>
          <dl className="flex gap-2">
            <dt className="sr-only">Total de dinero necesitado</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252] ">
              {quantityString}
            </dd>
            <dt className="sr-only">Cantidad de mascotas beneficiadas</dt>
            <dd className="font-medium text-xs capitalize lg:text-base text-[#525252] flex items-center">
              <Icon name="footPrint" className="mr-1 size-4" /> {totalPets}
            </dd>
          </dl>
        </div>
        {shelter && (
          <Image
            className="shrink-0 self-center lg:size-12"
            src={shelter.logo.url}
            alt={shelter.logo.alt}
            height={34}
            width={34}
          />
        )}
      </div>
    </article>
  );
}

export default OpportunityCard;
