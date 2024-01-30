import React from 'react'
import { List } from './List'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export const Block: React.FC <any> = ({ items, name_en, name_ukr}) => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div>
      <h2>
        {language === 'EN' ? name_en : name_ukr}
      </h2>
      <List 
        items={items}
      />
    </div>
  )
}
