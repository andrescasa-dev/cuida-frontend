import CustomPagination from '@/components/molecules/CustomPagination';
import ModalAdoption from '@/components/organisms/ModalAdoption';

import fetchHelper from '@/lib/fetchHelper';
import { PetsResponse } from '@/types/animals';

async function page({
  searchParams,
}: {
  searchParams: { currentPage?: string; refugio?: number };
}) {
  const { currentPage, refugio } = searchParams;
  let url = `${process.env.BACKEND_URL}/api/animales?pagination[page]=${currentPage || '1'}&pagination[pageSize]=6`;
  if (refugio) {
    url += `&filters[refugio][id]=${searchParams.refugio}`;
  }
  const [errorPetsFetch, petsData] = await fetchHelper<PetsResponse>(url);

  if (errorPetsFetch !== undefined) {
    console.error(`error fetching pets data ${errorPetsFetch.message}`);
    return;
  }

  if (petsData.data.length === 0) {
    <div>no pets</div>;
    return;
  }

  const totalPages = petsData.pagination.pageCount;

  const pets = petsData.data;

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
          <ModalAdoption key={pet.id} pet={pet} />
        ))}
      </div>
      {totalPages > 1 && <CustomPagination totalPages={totalPages} />}
    </main>
  );
}

export default page;
