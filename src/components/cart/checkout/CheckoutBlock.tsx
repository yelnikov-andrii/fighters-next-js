import React from 'react';
import styles from './checkout.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const CheckoutBlock = () => {
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  const { totalSum } = useSelector((state: RootState) => state.cart);
  
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__price}>
      {`${currency} ${(totalSum * coefficient).toFixed(1).replace(/\.0$/, '')}`}
      </div>
      <button
        className={styles.checkout__button}
      >
        Checkout
      </button>
      <button
        className={styles.checkout__button}
      >
        Google pay
      </button>
    </div>
  )
}
