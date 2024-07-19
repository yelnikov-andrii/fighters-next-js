'use client'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux';

const About = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className='container'>
      <div>
        <h1>
          {language === 'EN' ? 'About us' : 'Про нас'}
        </h1>
        <p>
          {language === 'EN' ? 'Fighters shop has been the leading online specialist retailer of Combat Sports clothing, equipment and accessories in the UK since 2022. Initially finding our roots in the Boxing & MMA markets, in recent years we have expanded our offering to include a vast range of products for all martial arts and fitness disciplines. We hold in a vast range of brands and thousands of products, and have delivered to over 150,000 happy customers.' : 'З 2022 року Fighters shop є провідним спеціалізованим інтернет-магазином одягу, обладнання та аксесуарів для спортивних єдиноборств у Великій Британії. Спочатку ми знайшли своє коріння на ринках боксу та MMA, але в останні роки ми розширили нашу пропозицію, включивши широкий асортимент товарів для всі види бойових мистецтв і фітнесу. Ми маємо широкий асортимент брендів і тисячі продуктів і доставляємо продукцію понад 150 000 задоволених клієнтів.'}
        </p>
        <br />
        <p>
          {language === 'EN' ? 'We continue to strive to be a one-stop-shop for all things combat sport & martial arts, whether you are a professional fighter or just a fan of sport. Our standard UK delivery service is Evri 48 hour, a quick and reliable delivery service which is FREE for most orders over £99! We offer a range of other delivery options including Next Day delivery and speedy international options. We are more than happy to answer any of your questions about which product is right for you. Just get in touch!' : 'Ми й надалі прагнемо бути єдиним магазином для всього, що стосується єдиноборств і єдиноборств, незалежно від того, чи ви професійний боєць, чи просто любитель спорту. Нашою стандартною службою доставки у Великій Британії є Evri 48 годин, швидка та надійна служба доставки, яка БЕЗКОШТОВНА для більшості замовлень понад £99! Ми пропонуємо низку інших варіантів доставки, включаючи доставку наступного дня та швидкі міжнародні варіанти. Ми з радістю відповімо на будь-які ваші запитання про те, який продукт підходить саме вам. Просто зв\'яжіться!'}
        </p>
      </div>
    </div>
  )
}

export default About;
