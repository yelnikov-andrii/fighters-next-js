import React, { Dispatch, SetStateAction } from 'react';
import { VariantInt } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './variants.module.scss';
import { Availibility } from './Availibility';

interface Props {
  variants: VariantInt[];
  selectedVariant: VariantInt | null;
  setSelectedVariant: Dispatch<SetStateAction<VariantInt | null>>;
}

const VariantsBlock: React.FC <Props> = ({ variants, selectedVariant, setSelectedVariant }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <React.Fragment>
      <Availibility 
        selectedVariant={selectedVariant}
      />
      <h5 className={styles.variants__h5}>
        {language === 'EN' ? 'Size' : 'Розмір'}
      </h5>
      <div className={styles.variants__block}>
        {variants && variants.map((variant: VariantInt) => (
          <div className={(selectedVariant && selectedVariant.id === variant.id) ? styles.variants__item + ' ' + styles['variants__item--active'] : variant.quantity === 0 ? styles.variants__item + ' ' + styles['variants__item--empty'] : styles.variants__item}
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
