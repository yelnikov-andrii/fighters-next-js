import React, { Dispatch, SetStateAction } from 'react';
import { VariantInt } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './variants.module.scss';

interface Props {
  variants: VariantInt[];
  selectedVariant: VariantInt | null;
  setSelectedVariant: Dispatch<SetStateAction<VariantInt | null>>;
}

const VariantsBlock: React.FC <Props> = ({ variants, selectedVariant, setSelectedVariant }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <React.Fragment>
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
      <h5 className={styles.variants__h5}>
        {language === 'EN' ? 'Size' : 'Розмір'}
      </h5>
      <div className={styles.variants__block}>
        {variants && variants.map((variant: VariantInt) => (
          <div className={selectedVariant && selectedVariant.id === variant.id ? styles.variants__item + ' ' + styles['vatiants__item--active'] : variant.quantity === 0 ? styles.variants__item + ' ' + styles['variants__item--empty'] : styles.variants__item}
            onClick={() => {
              setSelectedVariant(variant);
            }}
            key={variant.id}
          >
            {language === 'EN' ? variant.name_en : variant.name_ukr}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const MemoizedVariants = React.memo(VariantsBlock);
export { MemoizedVariants as VariantsBlock };
