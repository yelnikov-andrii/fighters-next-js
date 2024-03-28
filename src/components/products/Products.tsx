'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { FIlter } from './filter/Filter';
import styles from './products.module.scss';
import { useSearchParams } from 'next/navigation'
import { NextUIProvider } from '@nextui-org/react';
import { List } from './List';

export const Products = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const subsubcategory = searchParams.get('subsubcategory');

  const dispatch = useDispatch();

  const { countOfProducts, allProductsLoaded } = useSelector((state: RootState) => state.products);
  const { language } = useSelector((state: RootState) => state.language);
  const { colorFilters, brandFilters, ageFilters, materialFilters, sizeFilters, genderFilters } = useSelector((state: RootState) => state.filter);
  const [allFilters, setAllFilters] = React.useState<any>({colorFilters, brandFilters, ageFilters, materialFilters, sizeFilters, genderFilters });

  const [page, setPage] = React.useState(1);

  useFetchProducts(category, subcategory, subsubcategory, page, dispatch, allFilters, allProductsLoaded);
  useScrollTop([page], 0, 0);

  const timerRef = React.useRef<any>(null);

  React.useEffect(() => {
    const filters = {
      colorFilters,
      brandFilters,
      ageFilters,
      materialFilters,
      sizeFilters,
      genderFilters
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  
    const newTimer = setTimeout(() => {
      setAllFilters(filters)
    }, 1000);
    timerRef.current = newTimer;
  
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [colorFilters, brandFilters, ageFilters, materialFilters, genderFilters, sizeFilters]);

  return (
    <NextUIProvider>
      <div className={styles.products}>
      <div className={styles.products__container}>
        <h1 className={styles.products__h1}>
          {countOfProducts > 0 && (
            language === 'EN' 
              ? `Count of products - ${countOfProducts}`
              : `Кількість продуктів - ${countOfProducts}`
          )}
        </h1>
        <div className={styles.products__block}>
          <FIlter 
            page={page}
          />
          <List 
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
    </NextUIProvider>
  );
};
