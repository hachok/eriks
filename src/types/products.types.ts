// interfaces
export interface IProductServer {
  Toepassing: string;
  salePrice: string;
  manufacturerName: string;
  Hardheid: string;
  grossPrice: string;
  BUP_UOM: string;
  Artikelnummer: string;
  stepQuantity: string;
  BUP_Value: string;
  badges: string;
  uom: string;
  Kleur: string;
  productImage: string;
  Temperatuurgebied: string;
  BUP_Conversion: string;
  minQuantity: string;
  manufacturerImage: string;
  name: string;
  Materiaal: string;
  sku: string;
  Snoerdikte: string;
  listPrice: string;
  channel: string;
  display: boolean;
  atp: object;
  'Inwendige diameter': string;
  'Maat volgens AS568': string;
}

export interface IProductResponse {
  products: IProductServer[];
}

export interface IProduct {
  Toepassing: string;
  salePrice: string;
  manufacturerName: string;
  Hardheid: string;
  grossPrice: string;
  BUP_UOM: string;
  Artikelnummer: string;
  stepQuantity: string;
  BUP_Value: string;
  badges: string[];
  uom: string;
  Kleur: string;
  productImage: string;
  Temperatuurgebied: string;
  BUP_Conversion: string;
  minQuantity: string;
  manufacturerImage: string;
  name: string;
  Materiaal: string;
  sku: string;
  Snoerdikte: string;
  listPrice: string;
  channel: string;
  display: boolean;
  atp: object;
  'Inwendige diameter': string;
  'Maat volgens AS568': string;
  id: string;
  features: IFeature[];
}

export interface IFeature {
  id: string;
  value: string;
  title: string;
}

export interface IPoductId {
  id: string;
}
