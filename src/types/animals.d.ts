export interface Photo {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  url: string;
}

export interface ContactInfo {
  id: number;
  email: string;
  numero: string;
}

export interface Representative {
  id: number;
  nombre: string;
  tipo_documento: string;
  num_documento: string;
  numero_celular: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  datos_contacto: ContactInfo;
}

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
  representante: Representative;
}

export interface Pet {
  id: number;
  nombre: string;
  slug: string;
  sexo: string;
  peso: number;
  edad: number;
  especie: string;
  personalidad: string[];
  historia: string;
  esterilizado: boolean;
  padecimientos: string[];
  estado: string;
  fotos: Photo[];
  refugio: Shelter;
}

export interface PetsResponse {
  data: Pet[];
}
