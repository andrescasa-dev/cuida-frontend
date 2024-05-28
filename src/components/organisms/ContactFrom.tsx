'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function ContactForm() {
  const schema = z.object({
    email: z.string().email({ message: 'Introduzca un email válido' }),
    subject: z.string().min(4, { message: 'Ingrese un asunto válido' }),
    bodyMessage: z.string().min(10, { message: 'Ingrese un asunto Mensaje válido' }),
  });
  type TContactFrom = z.infer<typeof schema>;
  const contactForm = useForm<TContactFrom>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      subject: '',
      bodyMessage: '',
    },
  });

  const onSubmit = (data: TContactFrom) => {
    console.log('data', data);
    const { email, bodyMessage, subject } = data;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyMessage)}`;
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.click();
  };

  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="grid gap-y-6 md:gap-y-4 max-w-lg md:min-w-96"
      >
        <FormField
          control={contactForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="andres@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Quiero ser parte" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="bodyMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="..." {...field} />
              </FormControl>
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

export function FormExample() {
  return (
    <form action="mailto:andres.about@gmail.com" method="get" encType="text/plain">
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />

      <label htmlFor="asunto">Asunto:</label>
      <input type="text" id="asunto" name="asunto" />

      <label htmlFor="mensaje">Mensaje:</label>
      <input type="text" id="mensaje" name="mensaje" />

      <button>enviar</button>
    </form>
  );
}
