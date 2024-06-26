/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../../../images/down.svg';
import { Subcategories } from './subcategories/Subcategories';
import { fetchCategories } from '../../../redux/action-creator/Categories/fetchCategories';
import { RootState } from '../../../redux/store';
import { BlockError } from './error/BlockError';
import { BlockLoading } from './loading/BlockLoading';
import styles from './categories.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryInt } from '@/types/categories';

const Categories = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const { categories, categoriesLoading, categoriesError, subcategories } = useSelector((state: RootState) => state.categories);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (categoriesError) {
    return (
      <BlockError 
        error={categoriesError}
      />
    );
  }

  if (categoriesLoading) {
    return (
      <BlockLoading />
    );
  }

  return (
    <div className={styles.categories}>
      <div>
        <div className={styles.categories__block}>
          <Link
            className={styles.categories__link}
            href='products'
          >
            {language === 'EN' ? 'All products' : 'Усі продукти'}
          </Link>
          {categories.map((category: CategoryInt) => (
            <Link 
              onMouseOver={() => {
                setSelectedCategory(category);
                if (subcategories.length > 0) {
                  setIsOpen(true);
                }
              }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              key={category.id}
              href={`products?category=${category.id}`}
            >
              {language === 'EN' ? category.name_en : category.name_ukr}
              <Image 
                src={arrow}
                alt="arrow"
                width={14}
                height={14}
              />
            </Link>
          ))}
        </div>
        <Subcategories 
          category={selectedCategory}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

const MemoizedCategories = React.memo(Categories);
export { MemoizedCategories as Categories };
