import React from 'react';
import { MyDropdown } from '@/components/ui/dropdown/MyDropdown';
import { BrandInt, ProductInt } from '@/types/products';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import styles from './technical.module.scss';

interface Props {
  product: ProductInt;
  brand: BrandInt | undefined;
}

export const TechnicalDescription: React.FC <Props> = ({ product, brand }) => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <div className={styles.technical}>
      <MyDropdown
        butttonContent={language === 'EN' ? 'Technical specification' : 'Технічна специфікація'}
      >
        <div>
          <p className={styles.technical__paragraph}>
            {language === 'EN' ? `Manufactured by: ${brand?.name}` : `Виготовлено: ${brand?.name}`}
          </p>
          <p className={styles.technical__paragraph}>
            {language === 'EN' ? `Material: ${product.material_en}` : `Матеріал: ${product.material_ukr}`}
          </p>
          <p className={styles.technical__paragraph}>
            {language === 'EN' ? `Gender: ${product.gender_en}` : `Стать: ${product.gender_ukr}`}
          </p>
          <p className={styles.technical__paragraph}>
            {language === 'EN' ? `Age: ${product.age_en}` : `Вік: ${product.age_ukr}`}
          </p>
        </div>
      </MyDropdown>
    </div>
  );
};
