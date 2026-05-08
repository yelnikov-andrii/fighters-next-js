import { StaticImageData } from "next/image";

export {};

declare global {
  // select
  interface SelectItemI {
    value: string;
    label: string;
  }

  // categories

  interface CategoryInt {
    id: number;
    name_ukr: string;
    name_en: string;
    photo: string;
  }

  interface SubcategoryInt {
    id: number;
    name_ukr: string;
    name_en: string;
  }

  interface SubsubcategoryInt {
    id: number;
    name_ukr: string;
    name_en: string;
  }

  interface CategoryStateInterface {
    categories: CategoryInt[];
    categoriesLoading: boolean;
    categoriesError: string;
    subcategories: SubcategoryInt[];
    subCategoriesLoading: boolean;
    subCategoriesError: string;
    allSubsubcategories: any[];
    allSubcategories: any[];
  }

  interface ActionCategoriesSuccess {
    type: string;
    payload: CategoryInt[];
  }

  interface ActionCategoriesError {
    type: string;
    payload: string;
  }

  interface ActionSubCategoriesSuccess {
    type: string;
    payload: SubcategoryInt[];
  }

  interface ActionSubCategoriesError {
    type: string;
    payload: string;
  }

  // faq

  interface ArticleI {
    id: number;
    html?: boolean;
    name_en: string;
    name_ukr: string;
    answer_en: string;
    answer_ukr: string;
  }

  interface AllArticlesI {
    id: number;
    link: string;
    name_en: string;
    name_ukr: string;
    description_en: string;
    description_ukr: string;
    articles: ArticleI[];
  }

  // filter

  interface Option {
    name?: string;
    name_en?: string;
    name_ukr?: string;
  }

  interface FilterOptionInt {
    name_en: string;
    name_ukr: string;
    arr: Option[];
    filterCategory: string;
  }

  interface AllFiltersInt {
    colorFilters: string[];
    brandFilters: Option[];
    ageFilters: Option[];
    materialFilters: Option[];
    sizeFilters: Option[];
    genderFilters: Option[];
  }

  // main

  interface ElementInt {
    translation_key: string;
    img: StaticImageData;
    imgAlt: string;
    linkUrl: string;
  }

  interface BrandI {
    id: number;
    name: string;
    img: string;
  }

  // products

  interface CurrencyFromServerInt {
    txt: string;
    rate: number;
    cc: string;
    exchangedate: string;
    r030: number;
  }

  interface ProductPhotoInt {
    id: number;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  }

  interface ProductInt {
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

  interface ProductAdded extends ProductInt {
    quantity: number;
    variant: VariantInt;
  }

  interface VariantInt {
    name_en: string;
    name_ukr: string;
    quantity: number;
    id: number;
    ProductSportId: number;
  }

  interface BrandInt {
    name: string;
    id: number;
  }

  interface UserI {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phone: string;
  }
}
