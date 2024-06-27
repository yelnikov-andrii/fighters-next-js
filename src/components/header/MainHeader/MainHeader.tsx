import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import styles from './mainheader.module.scss';
import Link from 'next/link';
import { MySelect } from '@/components/ui/select/MySelect';
import { currencies, languages } from '@/data/header';
import login from '@/images/user-alt-1.svg';
import { changeCurrency } from '@/redux/slices/currencySlice';
import { changeLang } from '@/redux/slices/langSlice';
import { RootState } from '@/redux/store';
import { MenuButton } from './MenuButton';
import { CartButton } from './CartButton';

interface Props {
  setMobileCategoriesAreOpen: Dispatch<SetStateAction<boolean>>;
}

export const MainHeader: React.FC <Props> = ({ setMobileCategoriesAreOpen }) => {
  
  const { language } = useSelector((state: RootState) => state.language);
  const { currency } = useSelector((state: RootState) => state.currency);

  const dispatch = useDispatch();

  const selectedCurrency: string = currencies?.find(curr => curr.includes(currency)) || currencies[0];

  function changeLanguage(language: string) {
    dispatch(changeLang(language));
    localStorage.setItem('language-fighters', language);
  }

  function changeCurrencyHandler(currency: string) {
    dispatch(changeCurrency(currency));
  }

  React.useEffect(() => {
    const languageFromStorage = localStorage.getItem('language-fighters');
    if (languageFromStorage) {
      dispatch(changeLang(languageFromStorage));
    }
  }, []);

  return (
    <nav className={styles.mainheader}>
      <Link 
        className={styles.mainheader__logo}
        href="/"
      >
          Fighters Shop
      </Link>
      <MenuButton 
        setMobileCategoriesAreOpen={setMobileCategoriesAreOpen}
      />
      <div className={styles.mainheader__authblock}>
        <MySelect 
          options={currencies}
          change={changeCurrencyHandler}
          selOption={selectedCurrency}
        />
        <MySelect 
          options={languages}
          change={changeLanguage}
          selOption={language}
        />
        <div className={styles.mainheader__icon}>
          <Image 
            src={login}
            alt="login button"
            width={20}
            height={20}
          />
        </div>
        <CartButton />
      </div>
    </nav>
  );
};
