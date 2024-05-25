import { OpportunityData } from '@/types';
import Image from 'next/image';
import BadgedPetCount from '../ui/BadgedPetCount';
import ShelterAvatar from '../ui/ShelterAvatar';
import Link from 'next/link';

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

const opportunityImages = {
  Alimento: {
    url: '/alimento.png',
    alt: 'bulto de alimento para mascotas',
  },
  Cirugía: {
    url: '/alimento.png',
    alt: 'bulto de alimento para mascotas',
  },
};

function OportunidadCard({ opportunity }: { opportunity: OpportunityData }) {
  const {
    mascotas_beneficiadas,
    refugio: shelter,
    descripcion: description,
    tipo: type,
  } = opportunity.attributes;

  const opportunityImage = opportunityImages[type];
  const totalPets = mascotas_beneficiadas.data.attributes.count;

  return (
    <article className="max-w-[22rem] relative flex gap-4 flex-col justify-end bg-muted rounded-3xl border border-border px-7 pt-11 pb-4 relative">
      <header className="mb-auto">
        <h3 className="font-semibold text-2xl uppercase">{type}</h3>
        <BadgedPetCount
          className="absolute top-0 right-[1.6rem]"
          petQuantity={totalPets}
        />
      </header>
      <div className="flex justify-center">
        <Image
          src={opportunityImage.url}
          alt={opportunityImage.alt}
          height={205}
          width={205}
        />
      </div>
      <p className="base">{description}</p>
      <footer>
        <a className="flex gap-2 items-center font-medium text-lg" href="">
          <ShelterAvatar shelter={shelter} />
          {shelter.data.attributes.nombre}
        </a>
      </footer>
      <Link
        className="opacity-0 after:absolute after:inset-0 after:z-10"
        aria-label="ir a el detalle de la oportunidad"
        href={'oportunidades/1'}
      />
    </article>
  );
}

export default OportunidadCard;
