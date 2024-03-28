'use client';
import React from 'react';
import { Categories } from './Categories/Categories';
import { MainHeader } from './MainHeader/MainHeader';
import { CategoriesMobile } from './Categories/mobilecategories/CategoriesMobile';
import styles from './header.module.scss';
import { CartSide } from './CartSide/CartSide';
import { ReduxWrapper } from '../reduxWrapper/Wrapper';

export const Header = () => {
  const [mobileCategoriesAreOpen, setMobileCategoriesAreOpen] = React.useState(false);
  
  return (
    <ReduxWrapper>
      <header className={styles.header}>
        <MainHeader
          setMobileCategoriesAreOpen={setMobileCategoriesAreOpen}
        />
        <Categories />
        <CartSide />
        <CategoriesMobile
          mobileCategoriesAreOpen={mobileCategoriesAreOpen}
          setMobileCategoriesAreOpen={setMobileCategoriesAreOpen}
        />
    </header>
    </ReduxWrapper>
  );
};
