import React from 'react'
import { ProductCardLoading } from './ProductCardLoading';
import styles from './products.module.scss';

export const ProductsLoading = () => {
  return (
    <div className={styles.products__loading}>
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
      <ProductCardLoading />
    </div>
  )
}
