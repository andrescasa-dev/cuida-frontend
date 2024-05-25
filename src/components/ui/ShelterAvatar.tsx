import { Shelter } from '@/types';
import Image from 'next/image';
import React from 'react';

function ShelterAvatar({ shelter }: { shelter: Shelter }) {
  return (
    <div className="inline-flex justify-center items-center rounded-full w-14 aspect-square overflow-hidden border border-border">
      <Image
        alt={`foto avatar del refugio: ${shelter.data.attributes.name}`}
        src={`${process.env.BACKEND_URL}${shelter.data.attributes.logo.data.attributes.url}`}
        height={58}
        width={58}
      />
    </div>
  );
}

export default ShelterAvatar;
