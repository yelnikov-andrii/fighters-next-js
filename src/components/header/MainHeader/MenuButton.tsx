import React, { Dispatch, SetStateAction } from 'react';
import styles from './mainheader.module.scss';

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
