export interface Logo {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
  };
}

export interface Shelter {
  data: {
    id: number;
    attributes: {
      nombre: string;
      slug: string;
      logo: {
        data: Logo;
      };
    };
  };
}

export interface BenefitedPets {
  data: {
    attributes: {
      count: number;
    };
  };
}

export interface OpportunityAttributes {
  titulo: string;
  tipo: 'Alimento';
  descripcion: string;
  metaDinero: string;
  estado: string;
  refugio: Shelter;
  mascotas_beneficiadas: BenefitedPets;
}

export interface OpportunityData {
  id: number;
  attributes: OpportunityAttributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface OpportunitiesResponse {
  data: OpportunityData[];
  meta: Meta;
}
