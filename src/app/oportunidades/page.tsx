import OpportunityReel from '@/components/utilites/OpportunityReel';

import { Suspense } from 'react';

async function opportunities({
  searchParams,
}: {
  searchParams: { currentPage?: string };
}) {
  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <hgroup>
        <h1 className="title mb-[0.375rem]">Oportunidades de donación</h1>
        <p className="base">
          Conoce las necesidades y concluye la donación directamente con el refugio.
        </p>
      </hgroup>
      <Suspense>
        <OpportunityReel
          url={`/api/necesidades?pagination[page]=${searchParams?.currentPage || 1}`}
        />
      </Suspense>
    </main>
  );
}

export default opportunities;
