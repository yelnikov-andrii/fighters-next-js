import React from 'react';
import styles from './variants.module.scss';
import { VariantInt } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
  selectedVariant: VariantInt | null;
}

export const Availibility: React.FC<Props> = ({ selectedVariant }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      {selectedVariant && (
        selectedVariant.quantity > 0 ?
          <h3 className={styles.variants__h3}>
            {language === 'EN' ? `In stock ${selectedVariant.quantity}` : `В наявності ${selectedVariant.quantity}`}
          </h3>
          :
          <h3
            className={selectedVariant.quantity === 0 ? styles.variants__h3 + ' ' + styles['variants__h3--empty'] : styles.variants__h3}
          >
            {language === 'EN' ? 'No in stock' : 'Немає в наявності'}
          </h3>
      )}
    </div>
  )
}
