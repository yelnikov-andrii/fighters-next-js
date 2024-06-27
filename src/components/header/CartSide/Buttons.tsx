import React from 'react';
import styles from './cartside.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { closeCart } from '@/redux/slices/cartSlice';

export const Buttons = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  return (
    <div className={styles.cartside__buttons}>
      <Link 
        className={styles.cartside__button}
        href="/cart"
        onClick={() => {
          dispatch(closeCart());
        }}
      >
        {language === 'EN' ? 'View cart' : 'До кошику'}
      </Link>
      <Link 
        className={styles.cartside__button}
        href="/checkout"
        onClick={() => {
          dispatch(closeCart());
        }}
      >
        {language === 'EN' ? 'Go to checkout' : 'Перейти до оплати'}
      </Link>
    </div>
  )
}
