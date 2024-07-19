'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchPhotos } from '../../redux/action-creator/Products/fetchPhotosOneProduct';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import { ImageBlock } from './image/ImageBlock';
import { InfoBlock } from './info/InfoBlock';
import { BrandInt, ProductInt, VariantInt } from '@/types/products';
import { baseUrl } from '@/data/url';
import styles from './product.module.scss';
import { PhotosLoading } from './PhotosLoading';

interface Props {
  product: ProductInt;
}

export const ProductCard: React.FC <Props> = ({ product }) => {
  const dispatch = useDispatch();
  const [variants, setVariants] = React.useState<VariantInt[]>([]);
  const [brand, setBrand] = React.useState<BrandInt>();

  const { photos, photosError, photosLoading } = useSelector((state: RootState) => state.photos);
  
  async function fetchVariants(productId: string) {
    try {
      const response = await axios.get(`${baseUrl}/variants/${productId}`);
      setVariants(response.data);
    }

    catch(e) {
    }
  }

  async function fetchBrand(brandId: number) {
    try {
      const response = await axios.get(`${baseUrl}/brands/${brandId}`);
      setBrand(response.data);
    }

    catch(e) {
    }
  }

  React.useEffect(() => {
    if (product) {
      dispatch(fetchPhotos(product.id));
    }
  }, [product]);

  React.useEffect(() => {
    if (product) {
      fetchVariants(product.id.toString());
    }
  }, [product]);

  React.useEffect(() => {
    if (product) {
      fetchBrand(product.BrandSportId);
    }
  }, [product]);

  return (
    <div className={styles.product}>
      <div>
        <div className={styles.product__block}>
          {photosLoading ? (
            <PhotosLoading />
          ) : (
            <ImageBlock 
              photos={photos}
            />
          )}
          {photosError && (
            <div>
              {photosError}
            </div>
          )}
          <InfoBlock 
            product={product}
            variants={variants}
            brand={brand}
          />
        </div>
      </div>
    </div>
  );
};
