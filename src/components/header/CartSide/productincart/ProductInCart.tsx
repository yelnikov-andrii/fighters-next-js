import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './productincart.module.scss';
import { deleteProduct } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import { CounterBlock } from '../counter/CounterBlock';

interface Props {
  product: ProductAdded;
}

export const ProductInCart: React.FC <Props> = ({ product }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  const price = `${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`;

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.productincart}>
        <h4 className={styles.productincart__name}>
          {language === 'EN' ? product.name_en : product.name_ukr}
        </h4>
        <h5 className={styles.productincart__size}>
          {language === 'EN' ? `Size: ${product.variant.name_en}` : `Розмір: ${product.variant.name_ukr}`}
        </h5>
        <CounterBlock 
          product={product}
        />
        <h5 className={styles.productincart__price}>
          {language === 'EN' ? `Price - ${price}` : `Ціна - ${price}`}
        </h5>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(deleteProduct(product));
          }}
        >
          X
        </button>
      </div>
    </>
  );
};
