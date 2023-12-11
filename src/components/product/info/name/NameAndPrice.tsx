import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ProductInt } from '@/types/products';
import styles from './name.module.scss';

interface Props {
  product: ProductInt;
  quantity: number;
}

export const NameAndPrice: React.FC <Props> = ({ product, quantity }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);

  return (
    <React.Fragment>
      <h1 className={styles.block__h1}>
        {language === 'EN' ? product.name_en : product.name_ukr}
      </h1>
      <h2 className={styles.block__h2}>
        {`${currency} ${(product.price * quantity * coefficient).toFixed(1).replace(/\.0$/, '')}`}
      </h2>
    </React.Fragment>
  );
};
