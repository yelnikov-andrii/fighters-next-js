'use client'
import React from 'react';
import styles from './categoryloading.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export const BlockLoading = () => {
  const { language } = useSelector((state: RootState) => state.language)
  return (
    <div className={styles.categoryloading}>
        <div className={styles.categoryloading__block}>
          {language === 'EN' ? 'Loading' : 'Завантаження'}
        </div>
    </div>
  );
};
