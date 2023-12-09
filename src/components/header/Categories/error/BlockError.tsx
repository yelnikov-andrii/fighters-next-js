import React from 'react';
import styles from './categoryerror.module.scss';

interface Props {
  error: string;
}

export const BlockError: React.FC <Props> = ({ error }) => {
  return (
    <div className={styles.categoryerror}>
      <div>
        <div className={styles.categoryerror__block}>
          {error}
        </div>
      </div>
    </div>
  );
};
