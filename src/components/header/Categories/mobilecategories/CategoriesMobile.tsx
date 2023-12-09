import React, { Dispatch, SetStateAction} from 'react';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { CategoryMobileBlock } from './CategoryMobileBlock';
import styles from './categoriesmobile.module.scss';

interface Props {
  mobileCategoriesAreOpen: boolean;
  setMobileCategoriesAreOpen: Dispatch<SetStateAction<boolean>>;
}

export const CategoriesMobile: React.FC <Props> = ({ mobileCategoriesAreOpen, setMobileCategoriesAreOpen }) => {
  const { categories } = useSelector((state: RootState) => state.categories);
  

  return (
    <div className={mobileCategoriesAreOpen ? styles.categoriesmobile : styles.categoriesmobile + ' ' + styles['categoriesmobile--hidden']}>
      <div
        className={mobileCategoriesAreOpen ? styles.categoriesmobile__content : styles.categoriesmobile__content + ' ' + styles['categoriesmobile--hidden']}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};
