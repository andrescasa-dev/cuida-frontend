import CustomPagination from '@/components/molecules/CustomPagination';
import ModalAdoption from '@/components/organisms/ModalAdoption';

import fetchHelper from '@/lib/fetchHelper';
import { PetsResponse } from '@/types/animals';

async function page() {
  const [errorPetsFetch, petsData] = await fetchHelper<PetsResponse>(
    `${process.env.BACKEND_URL}/api/animales`,
  );

  if (errorPetsFetch !== undefined) {
    console.error(`error fetching opportunity detail data ${errorPetsFetch.message}`);
    return;
  }

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
      <CustomPagination />
    </main>
  );
}

export default page;
