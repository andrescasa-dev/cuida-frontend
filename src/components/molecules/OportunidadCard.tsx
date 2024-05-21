import Image from 'next/image';
import React from 'react';
import BadgedPetCount from '../ui/BadgedPetCount';
import ShelterAvatar from '../ui/ShelterAvatar';

/* Todo
eliminar defaults
-[x] design analisis
-[x] semantic murk up
-[] desktop
-[] responsive
  -[] desktop
  -[] tablet  
-[] sacar el ejemplo a done se va a hacer el fetch de datos
-[] agregar textos de la card al design system
*/

function OportunidadCard({
  title = 'alimento',
  image = {
    imageSrc: '/alimento.png',
    alt: 'plato con purina para mascotas',
  },
  totalPets = 74,
  description = 'marca la diferencia uniéndote a nuestra campaña de donación para alimentar a los animales en nuestro refugio.',
  shelter = {
    name: 'La Tropa Gatuna De Yanet',
    avatarSrc: '/La_Tropa_Gatuna_De_Yanet 1.png',
  },
}: {
  title: string;
  image: { imageSrc: string; alt: string };
  totalPets: number;
  shelter: {
    name: string;
    avatarSrc: string;
  };
  description: string;
}) {
  return (
    <article className="max-w-[22rem] relative flex gap-4 flex-col justify-end bg-muted rounded-3xl border border-border px-7 pt-11 pb-4">
      <header className="mb-auto">
        <h3 className="font-semibold text-2xl uppercase">{title}</h3>
        <BadgedPetCount
          className="absolute top-0 right-[1.6rem]"
          petQuantity={totalPets}
        />
      </header>
      <div className="flex justify-center">
        <Image src={image.imageSrc} alt={image.alt} height={205} width={205} />
      </div>
      <p className="base">{description}</p>
      <footer>
        <a className="flex gap-2 items-center font-medium text-lg" href="">
          <ShelterAvatar shelter={shelter} />
          {shelter.name}
        </a>
      </footer>
    </article>
  );
}

export default OportunidadCard;
