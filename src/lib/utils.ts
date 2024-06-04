import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getYouthfulness = (age: number) =>
  age > 72 ? 'Abuelo' : age > 36 ? 'Adulto' : age > 12 ? 'Joven' : 'Cachorro';

export const getSize = (weight: number) =>
  weight > 25 ? 'Grande' : weight > 10 ? 'Mediano' : 'pequeño';

export const composeUrl = (relativeUrl: string) => `${relativeUrl}`;

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export const getAnimalCustomStyles = (id: number) => {
  const idxById = (id % 4) as 0 | 1 | 2 | 3;
  return {
    fillColor: cn(
      { 'fill-dec_yellow': idxById === 0 },
      { 'fill-dec_blue': idxById === 1 },
      { 'fill-dec_green': idxById === 2 },
      { 'fill-dec_violet': idxById === 3 },
    ),
    bgColor: cn(
      { 'bg-dec_yellow': idxById === 0 },
      { 'bg-dec_blue': idxById === 1 },
      { 'bg-dec_green': idxById === 2 },
      { 'bg-dec_violet': idxById === 3 },
    ),
  };
};
