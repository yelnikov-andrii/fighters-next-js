import React, { Dispatch, SetStateAction } from 'react';
import styles from './products.module.scss';
import { Pagination } from './pagination/Pagination';
import { ProductInt } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ProductsLoading } from './ProductsLoading';
import { Product } from './product/Product';

interface Props {
  // page: number;
  // setPage: Dispatch<SetStateAction<number>>;
  products: any;
}

export const List: React.FC<Props> = ({ products }) => {
  const { countOfProducts, allProductsLoaded, productsLoading } = useSelector((state: RootState) => state.products);
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className={styles.products__listwrapper}>
      {productsLoading ? (
        <ProductsLoading />
      ) : (
            <div className={styles.products__list}>
            {(products?.rows?.length > 0) ? products?.rows.map((product: ProductInt) => (
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
      )}
      {(products?.rows?.length > 0 ) && (
        <Pagination
          countOfProducts={products?.count}
        />
      )}
    </div>
  )
}
