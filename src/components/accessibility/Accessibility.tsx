'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserLink } from './BrowserLink';
import styles from './accessibility.module.scss';

export const Accessibility = () => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <div className='container'>
      <div className={styles.accessibility}>
        <h1 className={styles.accessibility__h1}>
          {language === 'EN' ? 'Accessibility' : 'Доступність'}
        </h1>
        <div>
          <p className={styles.accessibility__p}>
            {language === 'EN' ? 'Fighters is devoted to offering a website that is accessible to all users. We are utilising the most up to date technologies to offer the best possible shopping experience on Mobile, Desktop and Tablet. Our site is developed in accordance with the latest browsing technology, we advise that you browse our website on the most up to date versions of the below recommended web-browsers. Using the website on an outdated browser may impact your experience.' : 'Fighters прагне створити веб-сайт, доступний для всіх користувачів. Ми використовуємо найсучасніші технології, щоб запропонувати найкращий досвід покупок на мобільних пристроях, комп’ютерах і планшетах. Наш сайт розроблено відповідно до найновіших технологій перегляду, ми рекомендуємо вам переглядати наш веб-сайт у найновіших версіях рекомендованих нижче веб-браузерів. Використання веб-сайту в застарілому браузері може вплинути на вашу роботу.'}
          </p>
          <div className={styles.accessibility__block}>
          <BrowserLink 
            name="Mozilla FireFox:"
            url="https://www.mozilla.org"
          />
          <BrowserLink 
            name="Google Chrome:"
            url="https://www.google.com/chrome/"
          />
          <BrowserLink 
            name="Apple Safari:"
            url="https://www.apple.com/uk/safari/"
          />
          <BrowserLink 
            name="Microsoft Edge:"
            url="https://www.microsoft.com"
          />
          </div>
          <p className={styles.accessibility__p}>
            {language === 'EN' ? 'If you experience issues using the Made4Fighters website please don\'t hesitate to contact us.' : 'Якщо у вас виникли проблеми з використанням веб-сайту Fighters, будь ласка, не соромтеся зв’язатися з нами.'}
          </p>
        </div>
      </div>
    </div>
  )
}
