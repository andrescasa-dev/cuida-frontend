import CustomPagination from '@/components/molecules/CustomPagination';
import fetchHelper from '@/lib/fetchHelper';
import React from 'react';
import OportunidadCard from '../molecules/OportunidadCard';
import { OpportunitiesResponse } from '@/types/necessities';

async function OpportunityReel({ url }: { url: string }) {
  console.log('url', url);
  const [error, data] = await fetchHelper<OpportunitiesResponse>(
    `${process.env.BACKEND_URL}${url}`,
  );

  if (error !== undefined) {
    console.error(`Erro while fetching data: ${error.message}`);
    return;
  }

  if (data.data.length === 0) {
    return <div>no hay necesidades disponibles</div>;
  }

  const { data: opportunities } = data;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
        {opportunities.map((opportunity) => (
          <OportunidadCard opportunity={opportunity} key={opportunity.id} />
        ))}
      </div>
      <CustomPagination totalPages={data.pagination.total} />
    </>
  );
}

export default OpportunityReel;
