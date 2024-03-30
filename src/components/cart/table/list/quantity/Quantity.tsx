import React from 'react';
import styles from './quantity.module.scss';
import { ProductAdded } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
  product: ProductAdded;
}

export const Quantity: React.FC<Props> = ({ product }) => {
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  
  const sum = React.useMemo(() => {
    return product?.price * product?.quantity;
  }, [product])

  return (
    <div className={styles.quantity}>
      {`${currency} ${(sum * coefficient).toFixed(1).replace(/\.0$/, '')}`}
    </div>
  )
}
