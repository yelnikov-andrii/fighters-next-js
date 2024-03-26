'use client'
import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './product.module.scss';

export const PhotoLoading = () => {
  return (
    <div className={styles.product__loadingBlock}>
      <ContentLoader 
        speed={2}
        width={320}
        height={340}
        viewBox="0 0 580 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className={styles.product__photoLoading}
      >
        <rect x="7" y="-1" rx="0" ry="0" width="580" height="380" />
      </ContentLoader>
    </div>
  )
}
