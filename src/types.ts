export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ClientBrand {
  name: string;
  logoUrl?: string;
  icon?: string;
}
