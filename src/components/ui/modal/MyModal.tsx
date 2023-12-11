import React, { Dispatch, SetStateAction } from 'react';
import styles from './modal.module.scss';

interface Props {
  children: React.ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const MyModal: React.FC <Props> = ({ children, active, setActive }) => {
  return (
    <div className={active ? styles.modal + ' ' + styles['modal--active'] : styles.modal}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={styles.modal__content} 
        onClick={(e: any) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
