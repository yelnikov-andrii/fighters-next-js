import React from 'react';
import styles from './cartside.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const Buttons = () => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <div className={styles.cartside__buttons}>
      <button className={styles.cartside__button}>
        {language === 'EN' ? 'View cart' : 'До кошику'}
      </button>
      <button className={styles.cartside__button}>
        {language === 'EN' ? 'Go to checkout' : 'Перейти до оплати'}
      </button>
    </div>
  )
}
