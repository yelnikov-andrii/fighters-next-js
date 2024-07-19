import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Option } from '@/types/filter';

interface FilterStateInt {
  colorFilters: string[];
  brandFilters: Option[];
  ageFilters: Option[],
  materialFilters: Option[],
  genderFilters: Option[],
  sizeFilters: Option[],
  filterIsOpen: boolean,
}

const initialState: FilterStateInt = {
  colorFilters: [],
  brandFilters: [],
  ageFilters: [],
  materialFilters: [],
  genderFilters: [],
  sizeFilters: [],
  filterIsOpen: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addBrandFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.brandFilters = [...state.brandFilters, action.payload];
    },
    removeBrandFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.brandFilters = [...state.brandFilters].filter(filter => filter.name !== action.payload.name);
    },
    addColorFilter: (state: FilterStateInt, action: PayloadAction<string>) => {
      state.colorFilters = [...state.colorFilters, action.payload];
    },
    removeColorFilter: (state: FilterStateInt, action: PayloadAction<string>) => {
      state.colorFilters = [...state.colorFilters].filter(filter => filter !== action.payload);
    },
    addAgeFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.ageFilters = [...state.ageFilters, action.payload];
    },
    removeAgeFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.ageFilters = [...state.ageFilters].filter(filter => filter.name_en !== action.payload.name_en);
    },
    addSizeFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.sizeFilters = [...state.sizeFilters, action.payload];
    },
    removeSizeFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.sizeFilters = [...state.sizeFilters].filter(filter => filter.name_en !== action.payload.name_en);
    },
    addMaterialFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.materialFilters = [...state.materialFilters, action.payload];
    },
    removeMaterialFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.materialFilters = [...state.materialFilters].filter(filter => filter.name_en !== action.payload.name_en);
    },
    addGenderFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.genderFilters = [...state.genderFilters, action.payload];
    },
    removeGenderFilter: (state: FilterStateInt, action: PayloadAction<Option>) => {
      state.genderFilters = [...state.genderFilters].filter(filter => filter.name_en !== action.payload.name_en);
    },
    clearAllFilters: (state: FilterStateInt) => {
      state.colorFilters = [];
      state.brandFilters = [];
      state.ageFilters = [];
      state.genderFilters = [];
      state.materialFilters = [];
      state.sizeFilters = [];
    },
    toggleFilter: (state: FilterStateInt) => {
      state.filterIsOpen = !state.filterIsOpen;
    }
  },
});

export const { addColorFilter, removeColorFilter, clearAllFilters, addGenderFilter, removeGenderFilter, addAgeFilter, removeAgeFilter, addBrandFilter, removeBrandFilter, addMaterialFilter, removeMaterialFilter, addSizeFilter, removeSizeFilter, toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;