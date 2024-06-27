import { RootState } from '@/redux/store'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'

export const List: React.FC <any> = ({ items }) => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <ul>
      {items.map((item: any) => (
        <li>
          <Link href={item.url}>
            {language === 'EN' ? item.name_en : item.name_ukr}
          </Link>
        </li>
      ))}
    </ul>
  )
}
