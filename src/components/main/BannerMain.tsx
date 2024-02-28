import React from 'react';
import Image from 'next/image';
import venumBanner from '@/images/venum.jpg';
import venumBannerSmall from '@/images/banner-main-sm.jpg';
import styles from './main.module.scss';
import { unstable_getImgProps as getImgProps } from 'next/image'

export const BannerMain = () => {
  const common = { alt: 'finghter venum brand', width: 100, height: 100, layout: 'responsive', objectFit: 'cover' };
  const { props: { srcSet: small } } = getImgProps({ ...common, src: venumBannerSmall })
  const { props: { srcSet: big, ...rest } } = getImgProps({ ...common, src: venumBanner });

  return (
    <div className={styles.main__bannerMain}>
        <picture>
          <source media="(max-width: 768px)" srcSet={small} />
          <source media="(min-width: 768px)" srcSet={big} />
          <img {...rest} />
        </picture>
    </div>
  )
}

