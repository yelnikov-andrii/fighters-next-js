import React from 'react';
import styles from './counter.module.scss';
import { useDispatch } from 'react-redux';
import { decreaseProduct, deleteProduct, increaseProduct } from '@/redux/slices/cartSlice';
import { ProductAdded } from '@/types/products';

interface Props {
  product: ProductAdded;
}

export const Counter: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  
  return (
    <div className={styles.counter}>
      <button
        className={styles.counter__button}
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
      <button 
        className={styles.counter__delete}
        onClick={() => {
          dispatch(deleteProduct(product));
        }}
      >
        &#10006;
      </button>
    </div>
  )
}
