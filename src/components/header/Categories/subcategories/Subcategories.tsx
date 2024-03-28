/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction } from 'react';
import { fetchSubCategories } from '@/redux/action-creator/Categories/fetchCategories';
import { useDispatch, useSelector } from 'react-redux';
import { SubSubCategory } from '../subsubcategories/SubSubCategory';
import { RootState } from '@/redux/store';
import { BlockError } from '../error/BlockError';
import { BlockLoading } from '../loading/BlockLoading';
import styles from './subcategories.module.scss';
import { CategoryInt, SubcategoryInt } from '@/types/categories';
import { baseUrl } from '@/data/url';
import Image from 'next/image';
import clsx from 'clsx';

interface Props {
  category: CategoryInt;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const Subcategories: React.FC <Props> = ({ category, setIsOpen, isOpen }) => {
  const { subcategories, subCategoriesLoading, subCategoriesError } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (category) {
      dispatch(fetchSubCategories(category.id));
    }
  }, [category]);

  if (subCategoriesError) {
    return (
      <BlockError 
        error={subCategoriesError}
      />
    );
  }

  if (subCategoriesLoading) {
    return (
      <div
        className={clsx({
          [styles.subcategories]: true,
          [styles['subcategories--hidden']]: !isOpen || subCategoriesError || subCategoriesLoading,
        })}
        onMouseOver={() => {
          if (!subCategoriesError && !subCategoriesLoading) {
            setIsOpen(true);
          }
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <BlockLoading />
      </div>
    );
  }
  
  return (
    <div
    className={clsx({
      [styles.subcategories]: true,
      [styles['subcategories--hidden']]: !isOpen || subCategoriesError || subCategoriesLoading,
    })}
      onMouseOver={() => {
        if (!subCategoriesError && !subCategoriesLoading) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.subcategories__block}>
        {subcategories?.map((subcategory: SubcategoryInt) => (
          <SubSubCategory 
            subcategory={subcategory}
            key={subcategory.id}
          />
        ))}
        <div>
          <Image 
            src={`${baseUrl}/${category?.photo}` || ''}
            alt=""
            className={styles.subcategories__img}
            width={280}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
