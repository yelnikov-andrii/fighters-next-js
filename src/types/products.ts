export interface CurrencyFromServerInt {
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
  r030: number;
}

export interface ProductPhotoInt {
  id: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductInt {
  BrandSportId: number;
  SubSubcategorySportId: number;
  age_en: string;
  age_ukr: string;
  color_en: string[];
  color_ukr: string[];
  createdAt: string;
  description_en: string;
  description_ukr: string;
  gender_en: string;
  gender_ukr: string;
  id: number;
  material_en: string;
  material_ukr: string;
  name_en: string;
  name_ukr: string;
  price: number;
  updatedAt: string;
}

export interface ProductAdded extends ProductInt {
  quantity: number;
  variant: VariantInt;
}

export interface VariantInt {
  name_en: string;
  name_ukr: string;
  quantity: number;
  id: number;
  ProductSportId: number;
}

export interface BrandInt {
  name: string;
  id: number;
}