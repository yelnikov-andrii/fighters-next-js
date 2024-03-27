import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './quantity.module.scss';
import { VariantInt } from '@/types/products';

interface Props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  selectedVariant: VariantInt | null;
}

export const QuantityBlock: React.FC <Props> = ({ quantity, setQuantity, selectedVariant }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className={styles.quantity}>
      <h5 className={styles.quantity__h5}>
        {language === 'EN' ? 'Quantity' : 'Кількість'}
      </h5>
      <div className={styles.quantity__block}>
        <button
          className={quantity === 1 ? styles.quantity__button + ' ' + styles['quantity__button--disabled'] : styles.quantity__button}
          disabled={quantity === 1}
          onClick={() => {
            if (quantity > 1) {
              setQuantity(prev => prev - 1);
            }
          }}
        >
          -
        </button>
        <input
          className={styles.quantity__input} 
          value={quantity}
          onChange={(e) => {
            const value = +e.target.value;
            if (!isNaN(value)) {
              setQuantity(value);
            }
          }}
        />
        <button
          className={quantity >= (selectedVariant?.quantity || 0 ) ? styles.quantity__button + ' ' + styles['quantity__button--disabled'] : styles.quantity__button}
          disabled={quantity >= (selectedVariant?.quantity || 0 )}
          onClick={() => {
            setQuantity(prev => prev + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
