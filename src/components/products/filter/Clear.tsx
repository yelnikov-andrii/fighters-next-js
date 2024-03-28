import React from 'react';
import styles from './filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilters } from '@/redux/slices/filterSlice';
import { RootState } from '@/redux/store';

interface Props {
  filtersAreEmpty: boolean;
}

export const Clear: React.FC<Props> = ({ filtersAreEmpty }) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  
  return (
    <div className={styles.filter__clear}>
      <button
        onClick={() => {
          if (!filtersAreEmpty) {
            dispatch(clearAllFilters());
          }
        }}
        className={styles.filter__button}
      >
        {language === 'EN' ? 'Clear all' : 'Очистити фільтри'}
      </button>
    </div>
  )
}
