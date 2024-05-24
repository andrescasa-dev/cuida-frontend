import CustomPagination from '@/components/molecules/CustomPagination';
import { Badge } from '@/components/ui/badge';

import CTAButton from '@/components/molecules/CTAButton';
import PetCard from '@/components/molecules/PetCard';
import PetAvatar from '@/components/ui/PetAvatar';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function page() {
  const pets = [
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
  ];
  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <hgroup>
        <h1 className="title mb-[0.375rem]">Mascotas</h1>
        <p className="base">
          Conoce las mascotas, si gustas puedes solicitar adopción directamente con el
          refugio.
        </p>
      </hgroup>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
        {pets.map((pet) => (
          <Dialog key={pet.id}>
            <DialogTrigger>
              <PetCard pet={pet} shelter={pet.shelter} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="uppercase font-semibold text-2xl">
                  {pet.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-4 gap-y-6">
                <PetAvatar
                  className="w-48 aspect-square sm:w-full sm:aspect-square  justify-self-center max-sm:col-span-2 shrink-0 inline-flex"
                  color="yellow"
                  avatarUrl={pet.photo.url}
                />
                <section className="max-sm:col-span-2 mx-auto sm:mx-0">
                  <h3 className="sr-only font-medium text-base mb-1 sm:not-sr-only ">
                    Características
                  </h3>
                  <dl className="flex sm:flex-col sm:gap-1 justify-be gap-4">
                    <dt className="sr-only ">Sexo</dt>
                    <dd>
                      <Badge variant="secondary">{pet.sex}</Badge>
                    </dd>
                    <dt className="sr-only">tamaño</dt>
                    <dd>
                      <Badge variant="secondary">{pet.size}</Badge>
                    </dd>
                    <dt className="sr-only">juventud</dt>
                    <dd>
                      <Badge variant="secondary">{pet.ageString}</Badge>
                    </dd>
                  </dl>
                </section>
                <section className="col-span-2 sm:col-span-3 sm:row-start-1 sm:col-start-2">
                  <h3 className="font-medium text-base mb-1">Historia</h3>
                  <p className="text-sm ">{pet.story}</p>
                </section>
                <section>
                  <h3 className="font-medium text-base mb-1">Personalidad</h3>
                  <div className="flex gap-1 flex-wrap">
                    {pet.personality?.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </section>
                <section>
                  <h3 className="font-medium text-base">Padecimientos</h3>
                  <div className="flex gap-1 flex-wrap">
                    {pet.ailments?.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>
              <DialogFooter className="flex flex-col gap-2 mt-4">
                <CTAButton className="w-full max-w-none" href="#" variant="secondary">
                  Visitar refugio
                </CTAButton>
                {/* This is not a link */}
                <CTAButton className="w-full max-w-none" href="#">
                  Solicitar adopción
                </CTAButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <CustomPagination />
    </main>
  );
}

export default page;
