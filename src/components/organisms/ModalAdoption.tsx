'use client';
import PetCard from '@/components/molecules/PetCard';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ModalContentPetDetail from './ModalContentPetDetail';
import ModalContentPetForm from './ModalContentPetForm';

function ModalAdoption({ pet }) {
  const [isFormOpened, setIsFormOpened] = useState<false | true>(false);
  return (
    <Dialog key={pet.id}>
      <DialogTrigger>
        <PetCard pet={pet} shelter={pet.shelter} />
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
