import { cn } from '@/lib/utils';
import React from 'react';

const petImages = {
  dog2: '/dog2-removebg-preview.png',
};

type PetImages = keyof typeof petImages;

const colors = {
  yellow: 'bg-dec_yellow',
  green: 'bg-dec_green',
  blue: 'bg-dec_blue',
  violet: 'bg-dec_violet',
};

type Colors = keyof typeof colors;

function PetBubble({
  className,
  pet,
  color,
}: {
  className?: string;
  pet: PetImages;
  color: Colors;
}) {
  return (
    <div
      aria-hidden={true}
      className={cn(
        'overflow-hidden flex justify-center items-end w-5 h-5 md:h-12 md:w-12 border border-black rounded-full',
        colors[color],
        className,
      )}
    >
      <img className="w-[90%] h-[90%]" src={petImages[pet]} alt="buble dog" />
    </div>
  );
}

export default PetBubble;
