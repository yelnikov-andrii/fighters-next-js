export interface CategoryInt {
  id: number;
  name_ukr: string;
  name_en: string;
  photo: string;
}

export interface SubcategoryInt {
  id: number;
  name_ukr: string;
  name_en: string;
}

export interface SubsubcategoryInt {
  id: number;
  name_ukr: string;
  name_en: string;
}

export interface CategoryStateInterface {
  categories: CategoryInt[],
  categoriesLoading: boolean;
  categoriesError: string;  
  subcategories: SubcategoryInt[],
  subCategoriesLoading: boolean,
  subCategoriesError: string,
}

export interface ActionCategoriesSuccess {
  type: string;
  payload: CategoryInt[];
}

export interface ActionCategoriesError {
  type: string;
  payload: string;
}

export interface ActionSubCategoriesSuccess {
  type: string;
  payload: SubcategoryInt[];
}

export interface ActionSubCategoriesError {
  type: string;
  payload: string;
}