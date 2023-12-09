import React from 'react';
import styles from './categoryloading.module.scss';

export const BlockLoading = () => {
  return (
    <div className={styles.categoryloading}>
      <div>
        <div className={styles.categoryloading__block}>
          Loading...
        </div>
      </div>
    </div>
  );
};
