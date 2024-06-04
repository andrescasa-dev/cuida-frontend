import { cn, getAnimalCustomStyles } from '@/lib/utils';
import React from 'react';

function PetAvatar({
  className,
  avatarUrl,
  petName,
  petId,
}: {
  className?: string;
  avatarUrl: string;
  petName: string;
  petId: number;
}) {
  const { bgColor } = getAnimalCustomStyles(petId);
  return (
    <div
      aria-hidden={true}
      className={cn(
        'overflow-hidden flex justify-center items-end border border-black rounded-full',
        className,
        bgColor,
      )}
    >
      <img
        className="w-[90%] h-[90%]"
        src={avatarUrl}
        alt={`small photo of a pet ${petName}`}
      />
    </div>
  );
}

export default PetAvatar;
