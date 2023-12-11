import React from 'react';
import { MyDropdown } from '../../ui/dropdown/MyDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { BlockWithFilterOptions } from './options/BlockWithFilterOptions';
import { useGetAllOptions } from '@/hooks/filterHooks';
import { addColorFilter, clearAllFilters, removeColorFilter } from '@/redux/slices/filterSlice';
import { FilterOptionInt } from '@/types/filter';
import styles from './filter.module.scss';

export const FIlter: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);

  const { productsAllPages } = useSelector((state: RootState) => state.products);

  const {colors, options, brands} = useGetAllOptions(productsAllPages);
  const { colorFilters } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();


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
            dispatch(clearAllFilters());
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
};
