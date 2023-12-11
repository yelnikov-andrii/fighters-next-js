import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '@/images/left-arrow.png';
import styles from './cartside.module.scss';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import { closeCart } from '@/redux/slices/cartSlice';
import { ProductInCart } from './productincart/ProductInCart';
import Image from 'next/image';

export const CartSide = () => {
  const { cartIsOpen, productsInCart } = useSelector((state: RootState) => state.cart);
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();

  const totalCount = (productsInCart && productsInCart.reduce((init: number, elem: ProductAdded) => init + elem.price * elem.quantity, 0)) || 1;
  const price = `${(totalCount * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`;

  return (
    <div
      className={cartIsOpen ? styles.cartside : styles.cartside + ' ' + styles['cartside--hidden']} 
      onClick={() => {
        dispatch(closeCart());
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={cartIsOpen ? styles.cartside__content : styles.cartside__content + ' ' + styles['cartside__content--hidden']}
      >
        <div
          className={styles.cartside__arrow}
        >
          <Image 
            src={arrow}
            alt='arrow'
            onClick={() => {
              dispatch(closeCart());
            }}
            className={styles.cartside__img}
            width={40}
            height={20}
          />
        </div>
        <React.Fragment>
          {productsInCart && productsInCart.length > 0 ? (
            <div className={styles.cartside__products}>
              {productsInCart.map((product: ProductAdded) => (
                <ProductInCart 
                  product={product}
                  key={product.id + product.variant.name_en}
                />
              ))}
              <div className={styles.cartside__total}>
                {language === 'EN' ? `Total: ${price}` : `Разом: ${price}`}
              </div>
            </div>
          ) : (
            <div className={styles.cartside__products}>
              <div className={styles.cartside__empty}>
                {language === 'EN' ? 'Cart is empty' : 'Кошик порожній'}
              </div>
            </div>
          )}
        </React.Fragment>
      </div>
    </div>
  );
};