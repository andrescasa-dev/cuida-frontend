'use client';
import PetCard from '@/components/molecules/PetCard';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ModalContentPetDetail from './ModalContentPetDetail';
import ModalContentPetForm from './ModalContentPetForm';
import { Pet } from '@/types/animals';

function ModalAdoption({ pet }: { pet: Pet }) {
  const { refugio: shelter } = pet;
  const [isFormOpened, setIsFormOpened] = useState<false | true>(false);
  return (
    <Dialog key={pet.id}>
      <DialogTrigger>
        <PetCard pet={pet} shelter={shelter} />
      </DialogTrigger>
      <DialogContent>
        {isFormOpened ? (
          <ModalContentPetForm setIsFormOpened={setIsFormOpened} />
        ) : (
          <ModalContentPetDetail pet={pet} setIsFormOpened={setIsFormOpened} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ModalAdoption;
