import React from 'react';
import styles from './cart.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const Nav = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <nav className={styles.cart__nav}>
      <Link
        href="/"
        className={styles.cart__link}
      >
        {language === 'EN' ? 'Home' : 'На домашню'}
      </Link>
      <span>&#5171;</span>
      <span>{language === 'EN' ? 'Your shopping cart' : 'Твій кошик'}</span>
    </nav>
  )
}
