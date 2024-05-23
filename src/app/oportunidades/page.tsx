import CustomPagination from '@/components/molecules/CustomPagination';
import OportunidadCard from '@/components/molecules/OportunidadCard';
import fetchHelper from '@/lib/fetchHelper';
import React from 'react';

async function opportunity() {
  // const [error, data] = await fetchHelper(
  //   'http://localhost:1337/api/animales?populate[refugio][fields][0]=nombre&populate[refugio][populate][0]=logo',
  // );

  // if (error) {
  //   console.log(error.message);
  // } else {
  //   console.log(JSON.stringify(data, null, 2));
  // }

  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <hgroup>
        <h1 className="title mb-[0.375rem]">Oportunidades de donación</h1>
        <p className="base">
          Conoce las necesidades y concluye la donación directamente con el refugio.
        </p>
      </hgroup>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
        <OportunidadCard />
        <OportunidadCard />
        <OportunidadCard />
      </div>
      <CustomPagination />
    </main>
  );
}

export default opportunity;
