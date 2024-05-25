import React from 'react';
import { Button } from '../ui/button';
import { DialogFooter, DialogHeader } from '../ui/dialog';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import CTAButton from '../molecules/CTAButton';

function ModalContentPetForm({ setIsFormOpened }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-semibold text-2xl">
          Solicitud de adopción
        </DialogTitle>
        <DialogDescription className="text-base">
          Completa estos datos para que el refugio analice rápidamente la solicitud
          ¡Gracias por tu interés en adoptar!
        </DialogDescription>
      </DialogHeader>
      <form className="flex flex-col gap-5 my-6">
        <div className="flex gap-3">
          <div className="grid items-center gap-1.5 flex-grow">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" type="text" placeholder="Juan Trujillo" />
          </div>
          <div className="grid w-24 items-center gap-1.5 shrink-0">
            <Label htmlFor="age">Edad</Label>
            <Input id="age" type="number" placeholder="23" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex space-x-2">
            <Checkbox className="mt-[.2rem]" id="haveChildren" />
            <Label htmlFor="haveChildren">hay niños en mi hogar</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox className="mt-[.2rem]" id="hasYard" />
            <Label htmlFor="hasYard">Tengo patio en mi casa</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox className="mt-[.2rem]" id="hasExperience" />
            <Label htmlFor="hasExperience">Tengo o he tenido mascotas</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox className="mt-[.2rem]" id="hasTime" />
            <Label htmlFor="hasTime">Tengo disponibilidad horaria</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox className="mt-[.2rem]" id="hasPatience" />
            <Label htmlFor="hasPatience">
              podr&iacute;a cuidar una mascota con necesidades especiales
            </Label>
          </div>
        </div>
      </form>

      <DialogFooter className="flex gap-y-2">
        <Button
          className="max-w-none w-full"
          onClick={() => setIsFormOpened(false)}
          variant={'secondary'}
        >
          volver
        </Button>
        <CTAButton className="max-w-none w-full" href="#">
          Enviar
        </CTAButton>
      </DialogFooter>
    </>
  );
}

export default ModalContentPetForm;
