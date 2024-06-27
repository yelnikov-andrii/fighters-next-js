import React, { Dispatch, SetStateAction} from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { CategoryMobileBlock } from './CategoryMobileBlock';
import styles from './categoriesmobile.module.scss';
import clsx from 'clsx';

interface Props {
  mobileCategoriesAreOpen: boolean;
  setMobileCategoriesAreOpen: Dispatch<SetStateAction<boolean>>;
}

export const CategoriesMobile: React.FC <Props> = ({ mobileCategoriesAreOpen, setMobileCategoriesAreOpen }) => {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <div className={clsx({
      [styles.categoriesmobile] : true,
      [styles['categoriesmobile--hidden']] : !mobileCategoriesAreOpen
  })}>
      <div
        className={clsx({
          [styles.categoriesmobile__content] : true,
          [styles['categoriesmobile__content--hidden']] : !mobileCategoriesAreOpen
      })}
      >
        <div className={styles.categoriesmobile__buttonblock}>
          <div
            className={styles.categoriesmobile__button}
            onClick={() => {
              setMobileCategoriesAreOpen(false);
            }}
          >
            &#10006;
          </div>
        </div>
        <div
          className={styles.categoriesmobile__block}
        >
          {categories.map((category: any) => (
            <CategoryMobileBlock 
              category={category}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
