import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './quantity.module.scss';

interface Props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

export const QuantityBlock: React.FC <Props> = ({ quantity, setQuantity }) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className={styles.quantity}>
      <h5 className={styles.quantity__h5}>
        {language === 'EN' ? 'Quantity' : 'Кількість'}
      </h5>
      <div className={styles.quantity__block}>
        <button
          className={styles.quantity__button}
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
          className={styles.quantity__button}
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
