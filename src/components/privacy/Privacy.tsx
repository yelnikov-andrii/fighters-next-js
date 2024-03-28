'use client';
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './privacy.module.scss';

export const Privacy = () => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <div className='container'>
      <div className={styles.privacy}>
        <h1 className={styles.privacy__h1}>
          {language === 'EN' ? 'Privacy policy' : 'Політика конфіденційності'}
        </h1>
        <div className={styles.privacy__block}>
          <p className={styles.privacy__p}>
            {language === "EN" ? 'Fighters shop are committed to keeping your data safe. For your peace of mind, here is how we will use it:' : 'FIghters shop прагне зберігати ваші дані в безпеці. Для вашого спокою ось як ми будемо ним користуватися:'}
          </p>
          <ol className={styles.privacy__list}>
            <li>
              <b className={styles.privacy__b}>{language === "EN" ? 'It\'s for your benefit' : 'Це для вашої вигоди'}</b>
              <span className={styles.privacy__span}>{language === 'EN' ? 'We will only use your data to improve your experience with us' : 'Ми використовуватимемо ваші дані лише для покращення вашого досвіду спілкування з нами'}</span>
            </li>
            <li>
              <b className={styles.privacy__b}>{language === "EN" ? 'Secure and protected' : 'Безпечний і захищений'}</b>
              <span className={styles.privacy__span}>{language === 'EN' ? 'We will keep your data as safe as possible.' : 'Ми збережемо ваші дані в максимальному захисті.'}</span>
            </li>
            <li>
              <b className={styles.privacy__b}>{language === 'EN' ? 'We won\'t spam' : 'Ми не будемо спамити'}</b>
              <span className={styles.privacy__span}>{language === 'EN' ? 'You choose what we send you and how.' : 'Ви обираєте, що ми вам надсилаємо і як.'}</span>
            </li>
            <li>
              <b className={styles.privacy__b}>{language === 'EN' ? 'Minimal information' : 'Мінімум інформації'}</b>
              <span className={styles.privacy__span}>{language === 'EN' ? 'We only keep the essential bits of data we need. We delete what we don\'t.' : 'Ми зберігаємо лише важливі фрагменти даних, які нам потрібні. Ми видаляємо те, чого не робимо.'}</span>
            </li>
            <li>
              <b className={styles.privacy__b}>{language === "EN" ? 'Just let us know' : 'Просто дайте нам знати'}</b>
              <span className={styles.privacy__span}>{language === 'EN' ? 'If you want us to delete your information, just say.' : 'Якщо ви хочете, щоб ми видалили вашу інформацію, просто скажіть.'}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
