'use client'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { Nav } from './Nav';
import { CartProducts } from './table/CartProducts';
import { CheckoutBlock } from './checkout/CheckoutBlock';

export const Cart = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className='container'>
      <div className={styles.cart}>
        <Nav />
        <h1 className={styles.cart__h1}>
          {language === 'EN' ? 'Your cart' : 'Твій кошик'}
        </h1>
        <CartProducts />
        <CheckoutBlock />
      </div>
    </div>
  )
}
