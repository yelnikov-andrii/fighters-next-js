import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './error.module.scss';

export const ErrorBlock = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className='container'>
      <div className={styles.error}>
        <h1>
          {language === 'EN' ? 'Error, page not found' : 'Помилка, сторінка не знайдена'}
        </h1>
      </div>
    </div>
  )
}
