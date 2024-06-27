import React from 'react'
import ContentLoader from 'react-content-loader';
import styles from './product.module.scss';

export const PhotosLoading = () => {
  return (
    <div className=''>
      <ContentLoader 
        speed={2}
        width={580}
        height={380}
        viewBox="0 0 580 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className={styles.product__photosLoading}
      >
        <rect x="7" y="-1" rx="0" ry="0" width="580" height="380" />
      </ContentLoader>
    </div>
  )
}
