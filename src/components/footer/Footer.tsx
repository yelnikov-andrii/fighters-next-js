'use client';
import React from 'react'
import { Links } from './links/Links'
import { ReduxWrapper } from '../reduxWrapper/Wrapper';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ReduxWrapper>
        <div className='container'>
          <Links />
        </div>
      </ReduxWrapper>
    </footer>
  )
}
