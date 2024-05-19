import { cn } from '@/lib/utils';
import React from 'react';

const petImages = {
  dog2: 'dog2-removebg-preview.png',
};

type PetImages = keyof typeof petImages;

const colors = {
  yellow: 'bg-[hsl(40_79%_49%_/_.7)]',
  green: 'bg-[hsl(118_72%_42%_/_.7)]',
  blue: 'bg-[hsl(217_77%_45%_/_.7)]',
  violet: 'bg-[hsl(327_74%_59%_/_.7)]',
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
