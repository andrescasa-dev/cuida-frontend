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
  id: number;
  nequi: string | null;
  daviplata: string | null;
  bancolombia: string | null;
  paypal: string | null;
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
  pasarelas: PaymentGateway | null;
  total_mascotas: number;
  total_perros: number;
  total_gatos: number;
}

export interface SheltersResponse {
  data: Shelter[];
}
