'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './terms.module.scss';

export const Terms = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className='container'>
      <div className={styles.terms}>
      <h1 className={styles.terms__h1}>
        {language === 'EN' ? 'Terms of service' : 'Правила та умови'}
      </h1>
      <p className={styles.terms__p}>
        {language === 'EN' ? 'Welcome to Fighters Website. PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE. All users of this site agree that access to and use of this site are subject to the following terms and conditions and other applicable law. These terms and conditions apply to all visits to the Made 4 Fighters Web site, both now and in the future. If you do not agree to these terms and conditions, please do not use this site. The entire content included in this site, including but not limited to text, graphics or code is copyrighted as a collective work under the United Kingdom and other copyright laws, and is the property of Made 4 Fighters. The collective work includes works that are licensed to Made 4 Fighters, copyright 2012, Made 4 Fighters ALL RIGHTS RESERVED. Permission is granted to electronically copy and print hard copy portions of this site for the sole purpose of placing an order with Made 4 Fighters or purchasing Made 4 Fighters products. You may display and, subject to any expressly stated restrictions or limitations relating to specific material, download or print portions of the material from the different areas of the site solely for your own non-commercial use, or to place an order with Made 4 Fighters or to purchase Made 4 Fighters products. Any other use, including but not limited to the reproduction, distribution, display or transmission of the content of this site is strictly prohibited, unless authorized by Made 4 Fighters. You further agree not to change or delete any proprietary notices from materials downloaded from the site.' : 'Вітаємо на веб-сайті Fighters. БУДЬ ЛАСКА, ПЕРЕД ВИКОРИСТАННЯМ ЦЬОГО ВЕБ-САЙТУ УВАЖНО ПРОЧИТАЙТЕ НИЖЧЕ ПОЛОЖЕННЯ ТА УМОВИ ВИКОРИСТАННЯ. Усі користувачі цього сайту погоджуються з тим, що доступ до цього сайту та його використання регулюються наведеними нижче положеннями та умовами та іншим застосовним законодавством. Ці умови застосовуються до всіх відвідувань веб-сайту Made 4 Fighters як зараз, так і в майбутньому. Якщо ви не згодні з цими умовами, не використовуйте цей сайт. Весь вміст цього сайту, включаючи, але не обмежуючись, текст, графіку чи код, захищено авторським правом як колективна робота відповідно до законодавства Великобританії та інших авторських прав і є власністю Made 4 Fighters. Колективна робота включає роботи, на які ліцензовано Made 4 Fighters, авторське право 2012, Made 4 Fighters УСІ ПРАВА ЗАХИЩЕНО. Надається дозвіл на копіювання та друк частин цього сайту в електронному вигляді з єдиною метою розміщення замовлення в Made 4 Fighters або придбання продукції Made 4 Fighters. Ви можете відображати та, відповідно до будь-яких прямо зазначених обмежень або обмежень, що стосуються конкретного матеріалу, завантажувати або друкувати частини матеріалу з різних розділів сайту виключно для власного некомерційного використання або для розміщення замовлення в Made 4 Fighters або придбати продукти Made 4 Fighters. Будь-яке інше використання, включаючи, але не обмежуючись, відтворення, розповсюдження, відображення або передачу вмісту цього сайту, суворо заборонено, якщо це не дозволено Made 4 Fighters. Ви також погоджуєтеся не змінювати та не видаляти будь-які повідомлення про право власності з матеріалів, завантажених із сайту.'}
      </p>
      </div>
    </div>
  )
}
