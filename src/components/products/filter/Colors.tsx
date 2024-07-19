import React, { useCallback } from 'react';
import styles from './filter.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Props {
  colors: string[];
  colorClickAction: (color: string) => void;
}

export const Colors: React.FC<Props> = ({ colors, colorClickAction }) => {
  const { colorFilters } = useSelector((state: RootState) => state.filter);
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className={styles.filter__colors}>
      {colors.map((color: string) => (
        <Link
          href={colorFilters.includes(color) ? `?${createQueryString('colors', colorFilters.filter(col => col !== color).join(','))}` : `?${createQueryString('colors', [...colorFilters, color].join(','))}`}
          className={colorFilters.includes(color) ? styles.filter__color + ' ' + styles['filter__color--active'] : styles.filter__color}
          style={{ background: color === 'khaki' ? '#7E805D' : color }}
          onClick={() => {
            colorClickAction(color);
          }}
          key={color}
        >
        </Link>
      ))}
    </div>
  )
}
