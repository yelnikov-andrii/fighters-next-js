import { CategoryInt } from '@/types/categories';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './categorymobile.module.scss';
import Link from 'next/link';
import { SubcategoriesMobile } from '../mobilesubcategories/SubcategoriesMobile';

interface Props {
  category: CategoryInt;
}

export const CategoryMobileBlock: React.FC <Props> = ({ category }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleBlock() {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <div className={styles.mobilelink__block}>
        <Link
          className={styles.mobilelink__link}
          href={`products?category=${category.id}`}
        >
          {language === 'EN' ? category.name_en : category.name_ukr}
        </Link>
        <div
          onClick={() => {
            toggleBlock();
          }}
          className={styles.mobilelink__button}
        >
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && (
        <SubcategoriesMobile 
          categoryId={category.id}
        />
      )}
    </React.Fragment>
  );
};
