import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@/redux/store';
import { BlockError } from '../error/BlockError';
import { BlockLoading } from '../loading/BlockLoading';
import styles from './subsubcategorymobile.module.scss';
import { SubsubcategoryInt } from '@/types/categories';
import Link from 'next/link';
import { baseUrl } from '@/data/url';

interface Props {
  subcategoryId: number;
}

export const SubsubcategoryMobile: React.FC <Props> = ({ subcategoryId }) => {
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
    fetchSubsubCategories(subcategoryId);
  }, [subcategoryId]);

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
      <div className={styles.subsubcategorymobile__list}>
        {subsubcategories.map((subsubcategory: SubsubcategoryInt) => (
          <li key={subsubcategory.id}>
            <Link
              className={styles.subsubcategorymobile__link}
              href={`/products?subsubcategory=${subsubcategory.id}`}
              key={subsubcategory.id}
            >
              {language === 'EN' ? subsubcategory.name_en : subsubcategory.name_ukr}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
