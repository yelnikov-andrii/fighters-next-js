import React, { Dispatch, SetStateAction } from 'react';
import styles from './mainheader.module.scss';
import { useDispatch } from 'react-redux';
import { openCart } from '@/redux/slices/cartSlice';

interface Props {
  setMobileCategoriesAreOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuButton: React.FC<Props> = ({ setMobileCategoriesAreOpen }) => {

  function openMobileCategories() {
    setMobileCategoriesAreOpen(true);
  }

  return (
    <div className={styles.mainheader__menubutton}
      onClick={() => {
        openMobileCategories();
      }}
    >
      <span className={styles.mainheader__span}></span>
      <span className={styles.mainheader__span}></span>
      <span className={styles.mainheader__span}></span>
    </div>
  )
}
