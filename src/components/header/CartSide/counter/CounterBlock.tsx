import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProduct, increaseProduct } from '@/redux/slices/cartSlice';
import styles from './counter.module.scss';
import { ProductAdded } from '@/types/products';

interface Props {
  product: ProductAdded;
}

export const CounterBlock: React.FC <Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.counter__block}>
      <button
        className={styles.counte__button}
        onClick={() => {
          dispatch(decreaseProduct(product));
        }}
      >
        -
      </button>
      <input 
        value={product.quantity}
        onChange={(e) => {
          const value = +e.target.value;
          if (!isNaN(value)) {
            console.log(' product quantity');
          }
        }}
        className={styles.counter__input}
      />
      <button
        className={styles.counter__button}
        onClick={() => {
          dispatch(increaseProduct(product));
        }}
      >
        +
      </button>
    </div>
  );
};
