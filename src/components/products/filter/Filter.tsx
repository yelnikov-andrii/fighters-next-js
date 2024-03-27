'use client'
import React from 'react';
import { MyDropdown } from '../../ui/dropdown/MyDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { BlockWithFilterOptions } from './options/BlockWithFilterOptions';
import { useGetAllOptions } from '@/hooks/filterHooks';
import { addColorFilter, clearAllFilters, removeColorFilter } from '@/redux/slices/filterSlice';
import { FilterOptionInt } from '@/types/filter';
import styles from './filter.module.scss';
import { useSearchParams } from 'next/navigation';
import { useFetchProductsAll } from '@/hooks/useFetchAllProducts';

interface Props {
  page: number;
}

export const FIlter: React.FC<Props> = React.memo(({ page }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const { productsAllPages } = useSelector((state: RootState) => state.products);
  const { brandFilters, ageFilters, materialFilters, genderFilters, sizeFilters } = useSelector((state: RootState) => state.filter);

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const subsubcategory = searchParams.get('subsubcategory');

  const { colors, options, brands } = useGetAllOptions(productsAllPages);
  const { colorFilters } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  useFetchProductsAll(category, subcategory, subsubcategory, page, dispatch);

  const filtersAreEmpty = React.useMemo(() => {
    if (!colorFilters.length && !brandFilters.length && !ageFilters.length && !materialFilters.length && !genderFilters.length && !sizeFilters.length ) {
      return true;
    }

    return false;
  }, [colorFilters, brandFilters, ageFilters, materialFilters, genderFilters, sizeFilters]);

  function colorClickAction(color: string) {
    if (colorFilters.includes(color)) {
      dispatch(removeColorFilter(color));
    } else {
      dispatch(addColorFilter(color)); 
    }
  }
  
  return (
    <div className={styles.filter}>
      <div className={styles.filter__clear}>
        <button
          onClick={() => {
            if (!filtersAreEmpty) {
              dispatch(clearAllFilters());
            }
          }}
          className={styles.filter__button}
        >
          {language === 'EN' ? 'Clear all' : 'Очистити фільтри'}
        </button>
      </div>
      <MyDropdown
        butttonContent={language === 'EN' ? 'Colors' : 'Кольори'}
      >
        <div className={styles.filter__colors}>
          {colors.map((color: string) => (
            <div
              className={colorFilters.includes(color) ? styles.filter__color + ' ' + styles['filter__color--active'] : styles.filter__color} 
              style={{background: color === 'khaki' ? '#7E805D' : color}}
              onClick={() => {
                colorClickAction(color);
              }}
              key={color}
            >
            </div>
          ))}
        </div>
      </MyDropdown>
      <MyDropdown
        butttonContent={language === 'EN' ? 'Brands' : 'Бренди'}
      >
        <BlockWithFilterOptions
          filterCategory='brands'
          array={brands}
        />
      </MyDropdown>
      {options.map((option: FilterOptionInt) => (
        <MyDropdown
          butttonContent={language === 'EN' ? option.name_en : option.name_ukr}
          key={option.name_en}
        >
          <BlockWithFilterOptions
            array={option.arr}
            filterCategory={option.filterCategory}
          />
        </MyDropdown>
      ))}
    </div>
  );
});
