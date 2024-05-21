import Image from 'next/image';
import React from 'react';

function ShelterAvatar({
  shelter: { avatarSrc, name },
}: {
  shelter: {
    name: string;
    avatarSrc: string;
  };
}) {
  return (
    <div className="inline-flex">
      <Image
        alt={`foto avatar del refugio: ${name}`}
        src={avatarSrc}
        height={58}
        width={58}
      />
    </div>
  );
}

export default ShelterAvatar;
