export interface PhotoAttributes {
  name: string;
  alternativeText: string;
  caption: string | null;
  url: string;
}

export interface PhotoData {
  id: number;
  attributes: PhotoAttributes;
}

export interface Photos {
  data: PhotoData[];
}

export interface LogoAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  url: string;
}

export interface LogoData {
  id: number;
  attributes: LogoAttributes;
}

export interface RepresentativeAttributes {
  numContacto: string;
}

export interface RepresentativeData {
  id: number;
  attributes: RepresentativeAttributes;
}

export interface ShelterAttributes {
  nombre: string;
  slug: string;
  logo: {
    data: LogoData;
  };
  representante: {
    data: RepresentativeData;
  };
}

export interface ShelterData {
  id: number;
  attributes: ShelterAttributes;
}

export interface PetAttributes {
  nombre: string;
  slug: string | null;
  sexo: string;
  peso: number;
  edad: number;
  especie: string;
  personalidad: string | null;
  historia: string | null;
  esterilizado: boolean;
  padecimientos: string[] | null;
  estado: string | null;
  fotos: Photos;
  refugio: {
    data: ShelterData;
  };
}

export interface PetData {
  id: number;
  attributes: PetAttributes;
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

export interface PetsResponse {
  data: PetData[];
  meta: Meta;
}
