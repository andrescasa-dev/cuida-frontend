import { cn } from '@/lib/utils';
import React from 'react';

const colors = {
  yellow: 'bg-[hsl(40_79%_49%_/_.7)]',
  green: 'bg-[hsl(118_72%_42%_/_.7)]',
  blue: 'bg-[hsl(217_77%_45%_/_.7)]',
  violet: 'bg-[hsl(327_74%_59%_/_.7)]',
};

type Colors = keyof typeof colors;

function PetAvatar({
  className,
  avatarUrl,
  color,
}: {
  className?: string;
  avatarUrl: string;
  color: Colors;
}) {
  return (
    <div
      aria-hidden={true}
      className={cn(
        'overflow-hidden flex justify-center items-end border border-black rounded-full',
        colors[color],
        className,
      )}
    >
      <img className="w-[90%] h-[90%]" src={avatarUrl} alt="buble dog" />
    </div>
  );
}

export default PetAvatar;
