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

export interface RefugioAttributes {
  nombre: string;
  slug: string;
  logo: {
    data: LogoData;
  };
}

export interface RefugioData {
  id: number;
  attributes: RefugioAttributes;
}

export interface DocumentoSoporte {
  data: null;
}

export interface MascotasBeneficiadas {
  data: [undefined];
}

export interface OpportunityAttributes {
  titulo: string;
  tipo: string;
  descripcion: string;
  metaDinero: string;
  estado: string;
  refugio: {
    data: RefugioData;
  };
  documentoSoporte: DocumentoSoporte;
  mascotasBeneficiadas: MascotasBeneficiadas;
}

export interface OpportunityData {
  id: number;
  attributes: OpportunityAttributes;
}

export interface Meta {}

export interface OpportunityResponse {
  data: OpportunityData;
  meta: Meta;
}
