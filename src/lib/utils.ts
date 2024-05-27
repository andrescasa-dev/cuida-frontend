import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYouthfulness = (age: number) =>
  age > 72 ? 'Abuelo' : age > 36 ? 'Adulto' : age > 12 ? 'Joven' : 'Cachorro';

export const getSize = (weight: number) =>
  weight > 25 ? 'Grande' : weight > 10 ? 'Mediano' : 'pequeño';

export const composeUrl = (relativeUrl: string) => `http://localhost:1337${relativeUrl}`;
