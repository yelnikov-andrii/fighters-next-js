import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from './mainheader.module.scss';
import Link from 'next/link';
import { MySelect } from '@/components/ui/select/MySelect';
import { currencies, languages } from '@/data/header';
import login from '@/images/user-alt-1.svg';
import cart from '@/images/shopping-cart-outline.svg';
import { openCart } from '@/redux/slices/cartSlice';
import { changeCurrency } from '@/redux/slices/currencySlice';
import { changeLang } from '@/redux/slices/langSlice';

interface Props {
  setMobileCategoriesAreOpen: Dispatch<SetStateAction<boolean>>;
}

export const MainHeader: React.FC <Props> = ({ setMobileCategoriesAreOpen }) => {
  
  const dispatch = useDispatch();

  function changeLanguage(language: string) {
    dispatch(changeLang(language));
  }

  function changeCurrencyHandler(currency: string) {
    dispatch(changeCurrency(currency));
  }

  function openMobileCategories() {
    setMobileCategoriesAreOpen(true);
  }

  return (
    <nav className={styles.mainheader}>
      <Link 
        className={styles.mainheader__logo}
        href="/"
      >
          Sport Shop
      </Link>
      <div className={styles.mainheader__menubutton}
        onClick={() => {
          openMobileCategories();
        }}
      >
        <span className={styles.mainheader__span}></span>
        <span className={styles.mainheader__span}></span>
        <span className={styles.mainheader__span}></span>
      </div>
      <div className={styles.mainheader__authblock}>
        <MySelect 
          options={currencies}
          change={changeCurrencyHandler}
        />
        <MySelect 
          options={languages}
          change={changeLanguage}
        />
        <div>
          <Image 
            src={login}
            alt="login button"
            width={20}
            height={20}
          />
        </div>
        <div>
          <Image 
            src={cart}
            alt="cart button"
            onClick={() => {
              dispatch(openCart());
            }}
            width={20}
            height={20}
          />
        </div>
      </div>
    </nav>
  );
};
