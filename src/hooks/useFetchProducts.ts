import React from 'react';
import { fetchProducts } from '../redux/action-creator/Products/fetchProducts';
import { AppDispatch } from '@/redux/store';
import { AllFiltersInt, Option } from '@/types/filter';

export const useFetchProducts = (category: string | null, subcategory: string | null, subsubcategory: string | null, page: number, dispatch: AppDispatch, allFilters: AllFiltersInt, isLoaded: boolean) => {
  const sizes = allFilters.sizeFilters.reduce((init: string, size: Option) => init + size.name_en + ',', '');
  const ages = allFilters.ageFilters.reduce((init: string, age: Option) => init + age.name_en + ',', '');
  const genders = allFilters.genderFilters.reduce((init: string, gender: Option) => init + gender.name_en + ',', '');
  const materials = allFilters.materialFilters.reduce((init: string, material: Option) => init + material.name_en + ',', '');
  const colors = allFilters.colorFilters.join(',');
  const brands = allFilters.brandFilters.reduce((init: string, brand: any) => init + brand.id + ',', '');

  React.useEffect(() => {
    if (isLoaded) {
      if (category) {
        dispatch(fetchProducts(`category=${category}&page=${page}&limit=9&colors=${colors}&sizes=${sizes}&ages=${ages}&genders=${genders}&materials=${materials}&brands=${brands}`));
        return;
    }

    if (subcategory) {
      dispatch(fetchProducts(`subcategory=${subcategory}&page=${page}&limit=9&colors=${colors}&sizes=${sizes}&ages=${ages}&genders=${genders}&materials=${materials}&brands=${brands}`));
      return;
    }

    if (subsubcategory) {
      dispatch(fetchProducts(`subsubcategory=${subsubcategory}&page=${page}&limit=9&colors=${colors}&sizes=${sizes}&ages=${ages}&genders=${genders}&materials=${materials}&brands=${brands}`));
      return;
    }

    dispatch(fetchProducts(`?page=${page}&limit=9&colors=${colors}&sizes=${sizes}&ages=${ages}&genders=${genders}&materials=${materials}&brands=${brands}`));
    }
  }, [category, subcategory, subsubcategory, page, allFilters, isLoaded]);
};