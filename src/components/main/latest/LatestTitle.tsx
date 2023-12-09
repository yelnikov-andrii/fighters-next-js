'use client';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './latest.module.scss';

export const LatestTitle = () => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
      <h2 className={styles.latest__title}>
        {language === 'EN' ? 'Latest arrivals' : 'Останні надходження'}
      </h2>
  )
}
