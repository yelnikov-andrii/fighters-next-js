import React from 'react'
import ContentLoader from 'react-content-loader';
import styles from './products.module.scss';

export const ProductCardLoading = () => {
  return (
    <ContentLoader 
      speed={2}
      width={340}
      height={480}
      viewBox="0 0 580 380"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className={styles.products__loadingCard}
    >
      <rect x="7" y="-1" rx="0" ry="0" width="580" height="380" />
    </ContentLoader>
  )
}
