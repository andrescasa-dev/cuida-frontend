export interface Logo {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  url: string;
}

export interface Shelter {
  id: number;
  nombre: string;
  slug: string;
  logo: Logo;
}

export interface SupportingDocument {
  id: number;
  url: string;
}

export interface BenefitedPet {
  id: number;
  nombre: string;
  slug: string;
}

export interface Opportunity {
  id: number;
  titulo: string;
  tipo: 'Medicamento' | 'Alimento' | 'Cirugía';
  descripcion: string;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  meta_dinero: string;
  estado: string;
  documento_soporte: SupportingDocument[] | null;
  refugio: Shelter;
  mascotas_beneficiadas: BenefitedPet[];
  total_mascotas_beneficiadas: number;
}

export interface OpportunitiesResponse {
  data: Opportunity[];
}
