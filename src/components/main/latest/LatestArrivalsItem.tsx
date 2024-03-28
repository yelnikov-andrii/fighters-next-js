'use client';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ProductInt, ProductPhotoInt } from '@/types/products';
import { baseUrl } from '@/data/url';
import Link from 'next/link';
import Image from 'next/image';
import styles from './latest.module.scss';
import clsx from 'clsx';

interface Props {
  product: ProductInt;
}

export const LatestArrivalsItem: React.FC <Props> = ({ product }) => {
  const [images, setImages] = React.useState<ProductPhotoInt[]>([]);

  const { language } = useSelector((state: RootState) => state.language);
  const { coefficient, currency } = useSelector((state: RootState) => state.currency);

  function fetchImages(productId: number) {
    axios.get(`${baseUrl}/products-photos/${productId}`)
      .then(response => {
        setImages(response.data);
      })
      .catch((e) => {

      })
      .finally(() => {

      });
  }

  React.useEffect(() => {
    if (product) {
      fetchImages(product.id);
    }
  }, [product]);


  return (
    <div className={styles.latest__item}>
      {images.length > 0 && (
        <Link 
          className={styles.latest__link}
          href={`/products/${product.id}`}>
          <Image
            src={`${baseUrl}/${images[0].imageUrl}`}
            alt=""
            className={styles.latest__img}
            width={100}
            height={100}
            layout='responsive'
          />
        </Link>
      )}
      <Link
        className={clsx({
          [styles.latest__link]: true,
          [styles['latest__link--txt']]: true
        })}
        href={`/products/${product.id}`}>
        <p className={styles.latest__name}>
          {language === 'EN' ? product.name_en : product.name_ukr}
        </p>
      </Link>
      <p className={styles.latest__price}>
        {`${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`}
      </p>
    </div>
  );
};
