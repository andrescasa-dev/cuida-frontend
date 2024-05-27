import { cn } from '@/lib/utils';
import { Shelter } from '@/types/necessities';

import Image from 'next/image';
import React from 'react';

function ShelterAvatar({ shelter, className }: { shelter: Shelter; className?: string }) {
  const { logo, nombre } = shelter;
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center rounded-full aspect-square overflow-hidden border border-border',
        className,
      )}
    >
      <Image
        alt={`foto avatar del refugio: ${nombre}`}
        src={`${process.env.BACKEND_URL}${logo.url}`}
        height={58}
        width={58}
      />
    </div>
  );
}

export default ShelterAvatar;
