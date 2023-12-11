'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from './product/Product';
import { Pagination } from './pagination/Pagination';
import { RootState } from '@/redux/store';
import { useScrollTop } from '@/hooks/useScrollTop';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { FIlter } from './filter/Filter';
import { ProductInt } from '@/types/products';
import styles from './products.module.scss';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';

export const Products = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const subsubcategory = searchParams.get('subsubcategory');

  const dispatch = useDispatch();

  const { products, countOfProducts } = useSelector((state: RootState) => state.products);
  const { language } = useSelector((state: RootState) => state.language);
  const { colorFilters, brandFilters, ageFilters, materialFilters, sizeFilters, genderFilters } = useSelector((state: RootState) => state.filter);

  const allFilters = React.useMemo(() => {
    return {
      colorFilters,
      brandFilters,
      ageFilters,
      materialFilters,
      sizeFilters,
      genderFilters
    };
  }, [colorFilters, brandFilters, ageFilters, materialFilters, genderFilters, sizeFilters]);

  const [page, setPage] = React.useState(1);

  useFetchProducts(category, subcategory, subsubcategory, searchParams, page, dispatch, allFilters);
  useScrollTop([page], 0, 0);

  return (
    <div className={styles.products}>
      <div>
        <h1 className={styles.products__h1}>
          {countOfProducts > 0 && (
            language === 'EN' 
              ? `Count of products - ${countOfProducts}`
              : `Кількість продуктів - ${countOfProducts}`
          )}
        </h1>
        <div className={styles.products__block}>
          <FIlter />
          <div className={styles.products__listWrapper}>
            <div className={styles.products__list}>
              {products.length > 0 ? products.map((product: ProductInt) => (
                <Product 
                  product={product}
                  key={product.id}
                />
              )) : (
                <div className={styles.products__noproducts}>
                  {language === 'EN' ? 'No products' : 'Немає продуктів'}
                </div>
              )}
            </div>
            <Pagination 
              countOfProducts={countOfProducts}
              setPage={setPage}
              currentPage={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
