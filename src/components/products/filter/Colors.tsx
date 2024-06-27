import React from 'react';
import styles from './filter.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
  colors: string[];
  colorClickAction: (color: string) => void;
}

export const Colors: React.FC<Props> = ({ colors, colorClickAction }) => {
  const { colorFilters } = useSelector((state: RootState) => state.filter);
  
  return (
    <div className={styles.filter__colors}>
      {colors.map((color: string) => (
        <div
          className={colorFilters.includes(color) ? styles.filter__color + ' ' + styles['filter__color--active'] : styles.filter__color} 
          style={{background: color === 'khaki' ? '#7E805D' : color}}
          onClick={() => {
            colorClickAction(color);
          }}
          key={color}
        >
        </div>
      ))}
    </div>
  )
}
