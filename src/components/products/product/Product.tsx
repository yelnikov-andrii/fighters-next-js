import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { baseUrl } from '@/data/url';
import { ProductInt, ProductPhotoInt } from '@/types/products';
import styles from './product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoLoading } from './PhotoLoading';

interface Props {
  product: ProductInt;
}

export const Product: React.FC <Props> = ({ product }) => {
  const [photos, setPhotos] = React.useState<ProductPhotoInt[]>([]);
  const [photosLoading, setPhotosLoading] = React.useState(false);
  const [photosError, setPhotosError] = React.useState('');
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);

  const fetchPhotos = async (productId: string = '') => {
    setPhotosLoading(true);
    try {
      if (productId) {
        const response = await axios.get(`${baseUrl}/products-photos/${productId}`);
        setPhotos(response.data);
        setPhotosLoading(false);
      }
    } 
    catch(e: any) {
      setPhotosError('Error can not load photos');
      setPhotosLoading(false);
    }
  };

  React.useEffect(() => {
    if (product) {
      fetchPhotos((product.id).toString());
    }
  }, [product]);


  return (
    <Link 
      href={`/products/${product.id}`}
      className={styles.product__link}
    >
      {photosLoading ? (
        <PhotoLoading />
      ) : (
        photos.length ? (
          <Image 
            src={`${baseUrl}/${photos[0].imageUrl}`}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        ) : (
          <div>
            {photosError}
          </div>
        )
      )}
      <h2 className={styles.product__h2}>
        {language === 'EN' ? product.name_en : product.name_ukr}
      </h2>
      <h3 className={styles.product__h3}>
        {`${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`}
      </h3>
    </Link>
  );
};
