export interface Option {
  name?: string;
  name_en?: string;
  name_ukr?: string;
}

export interface FilterOptionInt {
  name_en: string;
  name_ukr: string;
  arr: Option[];
  filterCategory: string;
}

export interface AllFiltersInt {
  colorFilters: string[];
  brandFilters: Option[];
  ageFilters: Option[];
  materialFilters: Option[];
  sizeFilters: Option[];
  genderFilters: Option[];
  
}