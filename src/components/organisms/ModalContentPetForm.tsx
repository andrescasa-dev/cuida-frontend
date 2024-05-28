import { Pet, Shelter } from '@/types/animals';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import Icon from '../ui/Icon';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { DialogFooter, DialogHeader } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

function ModalContentPetForm({
  pet,
  shelter,
  setIsFormOpened,
}: {
  pet: Pet;
  shelter: Shelter;
}) {
  // const { whatsapp } = shelter;
  // const whatsApp = '3166229648';
  // const petName = pet.nombre;

  const { register, handleSubmit } = useForm();
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-6">
        <div className="flex gap-3">
          <div className="grid items-center gap-1.5 flex-grow">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Juan Trujillo"
              {...register('name')}
            />
          </div>
          <div className="grid w-24 items-center gap-1.5 shrink-0">
            <Label htmlFor="age">Edad</Label>
            <Input id="age" type="number" placeholder="23" {...register('age')} />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex space-x-2">
            <Checkbox
              {...register('hasChildren')}
              className="mt-[.2rem]"
              id="hasChildren"
            />
            <Label htmlFor="hasChildren">hay niños en mi hogar</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox {...register('hasYard')} className="mt-[.2rem]" id="hasYard" />
            <Label htmlFor="hasYard">Tengo patio en mi casa</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox
              {...register('hasExperience')}
              className="mt-[.2rem]"
              id="hasExperience"
            />
            <Label htmlFor="hasExperience">Tengo o he tenido mascotas</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox {...register('hasTime')} className="mt-[.2rem]" id="hasTime" />
            <Label htmlFor="hasTime">Tengo disponibilidad horaria</Label>
          </div>
          <div className="flex space-x-2">
            <Checkbox
              {...register('hasPatience')}
              className="mt-[.2rem]"
              id="hasPatience"
            />
            <Label htmlFor="hasPatience">
              podr&iacute;a cuidar una mascota con necesidades especiales
            </Label>
          </div>
        </div>
        <button>enviar</button>
      </form>

      <DialogFooter className="flex gap-y-2">
        <Button
          className="max-w-none w-full"
          onClick={() => setIsFormOpened(false)}
          variant={'secondary'}
        >
          volver
        </Button>
        <Button asChild>
          <a target="_blank" href={'#'} className={'flex gap-[0.25em] max-w-none w-full'}>
            Enviar <Icon name="chevronRight" />
          </a>
        </Button>
      </DialogFooter>
    </>
  );
}

function onSubmit(data) {
  data.whatsApp = '3166229648';
  data.petName = 'Robin';
  sendAdoptionForm(data);
}

function sendAdoptionForm(data) {
  const {
    name,
    age,
    hasChildren,
    hasTime,
    hasYard,
    hasExperience,
    hasPatience,
    petName,
    whatsApp,
  } = data;

  let message = `Hola, estoy interesado en adoptar a ${petName}. Quiero saber más sobre el proceso de adopción. \n`;
  console.log('console log', {
    name,
    age,
    hasChildren,
    hasTime,
    hasYard,
    hasExperience,
    hasPatience,
    petName,
    whatsApp,
  });

  const hasChildrenBool = hasChildren === 'on';
  const hasTimeBool = hasTime === 'on';
  const hasYardBool = hasYard === 'on';
  const hasExperienceBool = hasExperience === 'on';
  const hasPatienceBool = hasPatience === 'on';

  if (name) message += `Soy ${name}, `;
  if (age) message += ` tengo ${age} años \n`;
  if (hasChildren) message += `- Hay niños en mi hogar 👶 \n`;
  if (hasTime) message += `- Tengo disponibilidad horaria ⏰ \n`;
  if (hasYard) message += `- Tengo patio 🏠 \n`;
  if (hasExperience) message += `- Tengo o he tenido mascotas antes 🐕 \n`;
  if (hasPatience)
    message += `- Estoy abierto a adoptar un perro con necesidades especiales ⚕️ \n`;

  const whatsAppLink = `https://api.whatsapp.com/send?phone=+57${whatsApp}&text=${encodeURI(message)}`;

  // window.open(whatsAppLink, '_blank');
}

export default ModalContentPetForm;
