import React from 'react';
import Image from 'next/image';
import venumBanner from '@/images/venum.jpg';
import styles from './main.module.scss';

export const BannerMain = () => {
  return (
    <div className={styles.main__bannerMain}>
      <Image 
        src={venumBanner}
        alt='venum banner'
        className={styles.main__imgMain}
      />
    </div>
  )
}
