import { cn } from '@/lib/utils';
import React from 'react';

function BadgedPetCount({
  petQuantity,
  className,
}: {
  petQuantity: number;
  className: string;
}) {
  return (
    <dl
      className={cn(
        'px-[0.75em] py-[1.25em] flex flex-col border border-border border-t-0 rounded-br-[0.5em] rounded-bl-[0.5em] bg-background',
        className,
      )}
    >
      <dt aria-label="cantidad de mascotas" className="text-xs ">
        Mascotas
      </dt>
      <dd className="text-[1.75rem] font-medium">
        {petQuantity === 0 ? '74' : petQuantity}
      </dd>
    </dl>
  );
}

export default BadgedPetCount;
