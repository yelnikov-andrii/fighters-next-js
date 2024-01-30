'use client'
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './contact.module.scss';

export const Contact = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className='container'>
      <div className={styles.contact}>
      <h1 className={styles.contact__h1}>
        {language === 'EN' ? 'Contact' : 'Контакти'}
      </h1>
      <p className={styles.contact__p}>
        {language === 'EN' ? 'Many common questions are answered within our Help & FAQ Section. If you still need assistance, feel free to reach out to us. LIVE CHAT. The best way to contact us is via our live chat feature on the bottom right hand corner of the page. EMAIL. Alternatively, please fill in the contact form below and one of our team will get back to you within 48hours. Please note emails are only responded to within our opening times, Monday: 10am - 4pm. Tuesday - Friday 9.30am - 4.30pm.' : 'Відповіді на багато поширених запитань можна знайти в розділі довідки та поширених запитань. Якщо вам все ще потрібна допомога, не соромтеся зв’язатися з нами. ЖИВИЙ ЧАТ. Найкращий спосіб зв’язатися з нами – скористатися чатом у нижньому правому куті сторінки. ЕЛЕКТРОННА ПОШТА. Крім того, заповніть контактну форму нижче, і один із наших співробітників зв’яжеться з вами протягом 48 годин. Зауважте, що відповіді на електронні листи надходять лише в робочий час, понеділок: з 10:00 до 16:00. Вівторок - п\'ятниця 9.30 - 16.30.'}
      </p>
    </div>
    </div>
  )
}
