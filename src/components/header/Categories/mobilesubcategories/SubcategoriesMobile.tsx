/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { SubsubcategoryMobile } from '../mobilesubsubcategories/SubsubcategoryMobile';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import styles from './subcategoriesmobile.module.scss';
import { baseUrl } from '@/data/url';
import { SubcategoryInt } from '@/types/categories';
import Link from 'next/link';

interface Props {
  categoryId: number;
}

export const SubcategoriesMobile: React.FC <Props> = ({ categoryId }) => {
  const [subcategories, setSubcategories] = React.useState([]);
  const { language } = useSelector((state: RootState) => state.language);

  async function fetchSubcategories() {
    try {
      const response = await axios.get(`${baseUrl}/subcategories?categoryId=${categoryId}`);
      setSubcategories(response.data);
    } catch(e) {
    }
  }

  React.useEffect(() => {
    if (categoryId) {
      fetchSubcategories();
    }
  }, [categoryId]);
  
  return (
    <div className={styles.subcategoriesmobile}>
      <div className={styles.subcategoriesmobile__block}>
        {subcategories?.map((subcategory: SubcategoryInt) => (
          <div className={styles.subcategoriesmobile__subcategories}>
            <Link 
              href={`/products?subcategory=${subcategory.id}`}
              className={styles.subcategoriesmobile__link}  
            >
              {language === 'EN' ? subcategory.name_en : subcategory.name_ukr}
            </Link>
            <SubsubcategoryMobile
              subcategoryId={subcategory.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
