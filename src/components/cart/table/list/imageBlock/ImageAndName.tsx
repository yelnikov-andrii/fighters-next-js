import React from 'react';
import styles from './imageAndName.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import { fetchPhotos } from '@/redux/action-creator/Products/fetchPhotosOneProduct';
import Image from 'next/image';
import { baseUrl } from '@/data/url';
import { PhotoLoading } from './PhotoLoading';

interface Props {
  productId: number;
  product: ProductAdded;
}

export const ImageAndName: React.FC<Props> = ({ productId, product }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const { photos, photosError, photosLoading } = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (productId) {
      dispatch(fetchPhotos(productId));
    }
  }, [productId]);

  return (
      <div className={styles.imageAndName}>
      <div>
        {photosLoading ? (
          <PhotoLoading />
        ) ? photosError : (
          <div>
            {photosError}
          </div>
        ) : (
            <Image 
              src={`${baseUrl}/${photos[0]?.imageUrl}`}
              alt=''
              width={100}
              height={100}
            />
          )}
      </div>
      <div className={styles.imageAndName__nameBlock}>
        <span className={styles.imageAndName__span}>
          {language === 'EN' ? product.name_en : product.name_ukr}
        </span>
        <span className={styles.imageAndName__span}>
          {language === 'EN' ? `Size: ${product.variant.name_en}` : `Розмір: ${product.variant.name_en}`}
        </span>
      </div>
      </div>
  )
}
