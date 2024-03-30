import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Counter } from './counter/Counter';
import styles from './list.module.scss'
import { ImageAndName } from './imageBlock/ImageAndName';
import { Quantity } from './quantity/Quantity';

export const List = () => {
  const { productsInCart } = useSelector((state: RootState) => state.cart);
  return (
    <div className={styles.list}>
      {productsInCart?.map(product => (
        <div className={styles.list__item}>
          <ImageAndName 
            product={product}
            productId={product.id}
          />
          <Counter 
            product={product}
          />
          <Quantity 
            product={product}
          />
        </div>
      ))}
    </div>
  )
}
