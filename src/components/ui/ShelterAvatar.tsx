import { cn } from '@/lib/utils';
import { Shelter } from '@/types/necessities';

import Image from 'next/image';
import React from 'react';

function ShelterAvatar({ shelter, className }: { shelter: Shelter; className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center rounded-full aspect-square overflow-hidden border border-border',
        className,
      )}
    >
      <Image
        alt={`foto avatar del refugio: ${shelter.data.attributes.nombre}`}
        src={`${process.env.BACKEND_URL}${shelter.data.attributes.logo.data.attributes.url}`}
        height={58}
        width={58}
      />
    </div>
  );
}

export default ShelterAvatar;
