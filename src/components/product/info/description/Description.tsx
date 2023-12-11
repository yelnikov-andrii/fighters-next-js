import React from 'react';
import { ProductInt } from '@/types/products';
import { MyDropdown } from '@/components/ui/dropdown/MyDropdown';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './description.module.scss';

interface Props {
  product: ProductInt;
}


export const Description: React.FC <Props> = ({ product }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className={styles.description}>
      <MyDropdown
        butttonContent={language === 'EN' ? 'Description' : 'Опис'}
      >
        <div className={styles.description__content}>
          {language === 'EN' ? product.description_en : product.description_ukr}
        </div>
      </MyDropdown>
    </div>
  );
};
