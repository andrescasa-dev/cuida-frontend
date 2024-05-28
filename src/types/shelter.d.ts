export interface Logo {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  url: string;
}

export interface SocialNetwork {
  redSocial: 'instagram' | 'facebook';
  url: string;
}

export interface PaymentGateway {
  metodo: string;
  numCuenta: string;
}

export interface Shelter {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  activo: boolean;
  servicios: string[];
  logo: Logo;
  redes: SocialNetwork[];
  pasarelas: PaymentGateway[];
  email: string;
  whatsapp: string;
  total_mascotas: number;
  total_perros: number;
  total_gatos: number;
}

export interface ShelterResponse {
  data: Shelter;
}
