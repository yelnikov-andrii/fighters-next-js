import { RootState } from '@/redux/store'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './links.module.scss';

export const List: React.FC <any> = ({ items }) => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <ul className={styles.links__list}>
      {items.map((item: any) => (
        <li
          key={item.name_en}
        >
          <Link href={item.url}>
            {language === 'EN' ? item.name_en : item.name_ukr}
          </Link>
        </li>
      ))}
    </ul>
  )
}
