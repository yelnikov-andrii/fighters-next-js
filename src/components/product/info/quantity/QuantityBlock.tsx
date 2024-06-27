import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './quantity.module.scss';
import { VariantInt } from '@/types/products';
import clsx from 'clsx';

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
          className={clsx({
            [styles.quantity__button]: true,
            [styles['quantity__button--disabled']]: quantity <= 1,
          })}
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
          className={clsx({
            [styles.quantity__button]: true,
            [styles['quantity__button--disabled']]: quantity >= (selectedVariant?.quantity || 0 )
          })}
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
