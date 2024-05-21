import OportunidadCard from '@/components/molecules/OportunidadCard';
import React from 'react';

function page() {
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
    </main>
  );
}

export default page;
