export interface Photo {
  id: number;
  name: string;
  alternativeText: string;
  caption: string | null;
  url: string;
}

export interface Representative {
  id: number;
  nombre: string;
  tipo_documento: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  num_documento: string | null;
  numero_celular: string | null;
  datos_contacto: string | null;
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
  slug: string | null;
  sexo: string;
  peso: number;
  edad: number;
  especie: string;
  personalidad: string[] | null;
  historia: string | null;
  esterilizado: boolean;
  padecimientos: string[];
  estado: string | null;
  fotos: Photo[];
  refugio: Shelter;
}

export interface PetsResponse {
  data: Pet[];
}
