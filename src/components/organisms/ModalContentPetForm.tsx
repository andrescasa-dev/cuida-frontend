import { Pet } from '@/types/animals';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { DialogHeader } from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

function ModalContentPetForm({ pet }: { pet: Pet }) {
  const whatsApp = pet.refugio.representante.datos_contacto.numero;
  const petName = pet.nombre;

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
      <CuidaFom whatsApp={whatsApp} petName={petName} />
    </>
  );
}
function CuidaFom({ whatsApp, petName }: { whatsApp: string; petName: string }) {
  const adoptionForm = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: '',
      items: ['hasChildren'],
    },
  });

  const onSubmitAdoption = (values: formType) => {
    let msg = `Hola, estoy interesado en adoptar a *${petName}*. Quiero saber más sobre el proceso de adopción. \n`;

    if (values.name !== '')
      msg += `Mi nombre es *${values.name}*${values.age ? ', ' : '\n'}`;
    if (Number(values.age) > 0) msg += `tego *${values.age} años*  \n`;

    msg += items
      .filter((item) => values.items.some((vItem) => vItem === item.id))
      .map((item) => item.msg)
      .join('');

    const whatsAppLink = `https://api.whatsapp.com/send?phone=+57${whatsApp}&text=${encodeURI(msg)}`;
    window.open(whatsAppLink, '_blank');
  };

  return (
    <Form {...adoptionForm}>
      <form
        onSubmit={adoptionForm.handleSubmit(onSubmitAdoption)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-3">
          <FormField
            control={adoptionForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Juan Trujillo" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={adoptionForm.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Edad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="23" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={adoptionForm.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={adoptionForm.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter((value) => value !== item.id),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="max-w-none w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

const formSchema = z.object({
  name: z.string().max(38),
  age: z.string().max(3),
  items: z.array(z.string()),
});

type formType = z.infer<typeof formSchema>;

const items = [
  {
    id: 'hasChildren',
    label: 'hay niños en mi hogar ',
    msg: `* Hay niños en mi hogar 👶 \n`,
  },
  {
    id: 'hasYard',
    label: 'Tengo patio en mi casa',
    msg: `* Tengo patio 🏠 \n`,
  },
  {
    id: 'hasExperience',
    label: 'Tengo o he tenido mascotas',
    msg: `* Tengo o he tenido mascotas antes 🐕 \n`,
  },
  {
    id: 'hasTime',
    label: 'Tengo disponibilidad horaria',
    msg: `* Tengo disponibilidad horaria ⏰ \n`,
  },
  {
    id: 'hasPatience',
    label: 'podría cuidar una mascota con necesidades especiales',
    msg: `* Estoy abierto a adoptar un perro con necesidades especiales ⚕️ \n`,
  },
] as const;

export default ModalContentPetForm;
