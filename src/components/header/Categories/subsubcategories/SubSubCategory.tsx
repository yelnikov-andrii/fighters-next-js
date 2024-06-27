import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@/redux/store';
import { BlockError } from '../error/BlockError';
import { BlockLoading } from '../loading/BlockLoading';
import styles from './subsubcategory.module.scss';
import { SubcategoryInt, SubsubcategoryInt } from '@/types/categories';
import { baseUrl } from '@/data/url';
import Link from 'next/link';

interface Props {
  subcategory: SubcategoryInt;
}

export const SubSubCategory: React.FC <Props> = ({ subcategory }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const [subsubcategories, setSubsubcategories] = React.useState([]);
  const [loadingSubsubcategories, setLoadingSubsubcategories] = React.useState(false);
  const [subsubcategoryError, setSubsubcategoryError] = React.useState('');

  const fetchSubsubCategories = async (subcategoryId: number) => {
    try {
      setLoadingSubsubcategories(true);
      const response = await axios.get(`${baseUrl}/subsubcategories?subcategoryId=${subcategoryId}`);
      setSubsubcategories(response.data);
      setLoadingSubsubcategories(false);
    } catch(e: any) {
      setSubsubcategoryError(e.message);
    }
  };

  React.useEffect(() => {
    fetchSubsubCategories(subcategory.id);
  }, [subcategory]);

  if (subsubcategoryError) {
    return (
      <BlockError 
        error={subsubcategoryError}
      />
    );
  }

  if (loadingSubsubcategories) {
    return (
      <BlockLoading />
    );
  }

  return (
    <div>
      <Link
        href={`/products?subcategory=${subcategory.id}`}
        className={styles.subsubcategory__subcategory}
      >
        {language === 'EN' ? subcategory.name_en : subcategory.name_ukr}
      </Link>
      <ul className={styles.subsubcategory__list}>
        {subsubcategories.map((subsubcategory: SubsubcategoryInt) => (
          <li key={subsubcategory.id}>
            <Link
              className={styles.subsubcategory__link}
              href={`/products?subsubcategory=${subsubcategory.id}`}
              key={subsubcategory.id}
            >
              {language === 'EN' ? subsubcategory.name_en : subsubcategory.name_ukr}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
