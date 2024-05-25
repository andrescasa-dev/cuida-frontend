import { Badge } from '@/components/ui/badge';
import CTAButton from '@/components/molecules/CTAButton';
import PetAvatar from '@/components/ui/PetAvatar';
import { DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';

function ModalContentPetDetail({ pet, setIsFormOpened }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="uppercase font-semibold text-4xl">{pet.name}</DialogTitle>
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
      <DialogFooter
        className="flex flex-col gap-2
       mt-4"
      >
        <CTAButton className="w-full max-w-none" href="#" variant="secondary">
          Visitar refugio
        </CTAButton>
        {/* This is not a link */}

        <Button onClick={() => setIsFormOpened(true)} className="w-full max-w-none">
          Solicitar adopción
        </Button>
      </DialogFooter>
    </>
  );
}

export default ModalContentPetDetail;
