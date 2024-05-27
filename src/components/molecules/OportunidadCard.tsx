import Image from 'next/image';
import BadgedPetCount from '../ui/BadgedPetCount';
import ShelterAvatar from '../ui/ShelterAvatar';
import Link from 'next/link';
import { Opportunity } from '@/types/necessities';

const opportunityImages = {
  Alimento: {
    url: '/alimento.png',
    alt: 'bulto de alimento para mascotas',
  },
  Cirugía: {
    url: '/alimento.png',
    alt: 'bulto de alimento para mascotas',
  },
  Medicamento: {
    url: '/alimento.png',
    alt: 'bulto de alimento para mascotas',
  },
};

function OportunidadCard({ opportunity }: { opportunity: Opportunity }) {
  const {
    refugio: shelter,
    descripcion: description,
    tipo: type,
    total_mascotas_beneficiadas,
  } = opportunity;

  const { nombre: nombreRefugio, id: shelterId } = shelter;
  const { url: cardImgUrl, alt: cardImgAlt } = opportunityImages[type];
  const totalPets = total_mascotas_beneficiadas;

  return (
    <article className="max-w-[22rem] relative flex gap-4 flex-col justify-end bg-muted rounded-3xl border border-border px-7 pt-11 pb-4">
      <header className="mb-auto">
        <h3 className="font-semibold text-2xl uppercase">{type}</h3>
        <BadgedPetCount
          className="absolute top-0 right-[1.6rem]"
          petQuantity={totalPets}
        />
      </header>
      <div className="flex justify-center">
        <Image src={cardImgUrl} alt={cardImgAlt} height={205} width={205} />
      </div>
      <p className="base">{description}</p>
      <footer>
        <a
          className="flex gap-2 items-center font-medium text-lg"
          href={`/refugios/${shelterId}`}
        >
          <ShelterAvatar className="w-14" shelter={shelter} />
          {nombreRefugio}
        </a>
      </footer>
      <Link
        className="opacity-0 after:absolute after:inset-0 after:z-10"
        aria-label="ir a el detalle de la oportunidad"
        href={`oportunidades/${shelterId}`}
      />
    </article>
  );
}

export default OportunidadCard;
