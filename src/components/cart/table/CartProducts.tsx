import React from 'react';
import styles from './cartproducts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { List } from './list/List';
import { ProductAdded } from '@/types/products';
import { setTotalSum } from '@/redux/slices/cartSlice';

export const CartProducts = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const { productsInCart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const sum = React.useMemo(() => {
    const totalSumOfPurchase: number = productsInCart?.reduce((initial: number, product: ProductAdded) => {
      const sum = product.price * product.quantity;
      return initial + sum;
    }, 0) || 0;

    return totalSumOfPurchase;
  }, [productsInCart]);

  React.useEffect(() => {
    dispatch(setTotalSum(sum));
  }, [productsInCart])

  return (
    <>
    {productsInCart && productsInCart?.length === 0 ? (
      <div className={styles.cartproducts}>
        {language === 'EN' ? 'No products in cart' : 'Кошик порожній'}
      </div>
    ) : (
      <div className={styles.cartproducts}>
      <div className={styles.cartproducts__header}>
        <p className={styles.cartproducts__title}>
          {language === 'EN' ? 'Product' : 'Продукт'}</p>
        <p className={styles.cartproducts__title}>
          {language === 'EN' ? 'Quantity' : 'Кількість'}</p>
        <p className={styles.cartproducts__title}>
          {language === 'EN' ? 'Total' : 'Разом'}</p>
      </div>
      <List />
    </div>
    )}
  </>
  )
}
