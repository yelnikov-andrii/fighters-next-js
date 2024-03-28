import React from 'react';
import styles from './mainheader.module.scss';
import Image from 'next/image';
import cart from '@/images/shopping-cart-outline.svg';
import { openCart } from '@/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';

export const CartButton = () => {
  const dispatch = useDispatch();
  const { productsInCart } = useSelector((state: RootState) => state.cart);

  const quantityOfProductsInCart = React.useMemo(() => {
    const count = productsInCart?.reduce((totalQuantity: number, product: ProductAdded) => {
      return totalQuantity + product.quantity;
    }, 0);

    return count;
  }, [productsInCart]);

  return (
    <div className={styles.mainheader__icon}>
      <Image 
        src={cart}
        alt="cart button"
        onClick={() => {
          dispatch(openCart());
        }}
        width={20}
        height={20}
      />
      {quantityOfProductsInCart && (
        <span className={styles.mainheader__span}>
          {quantityOfProductsInCart}
        </span>
      )}
    </div>
  )
}
