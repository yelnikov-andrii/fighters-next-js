'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../redux/store';
import styles from './about.module.scss';

interface Props {
  children: React.ReactNode;
}


export const AboutBlock = () => {
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className={styles.about}>
      <div className='container'>
        <div className={styles.about__block}>
          <div className={styles.about__item}>
            <h4 className={styles.about__title}>
              {language === 'EN' ? 'MMA CLOTHING & MARTIAL ARTS GEAR' : 'ММА одяг та спорядження'}
            </h4>
            <p className={styles.about__paragraph}>
              {language === 'EN' ? 'Welcome to SportShop - premiere online supplier of the latest Mixed Martial Arts, boxing and fitness equipment. We also offer an extensive range of uniforms and MMA apparel for training, competition and streetwear from the sports brands you trust. Whether you\'re a fan, fighter or practitioner, we\'re the first and last word when it comes to supplying you with all the specialized combat sports and martial arts equipment you need to perform your best. Shop our online store for the latest MMA clothing and martial arts training equipment, including: MMA Fight Shorts & MMA Gloves, Boxing Gloves, MMA & UFC T shirts, BJJ Gi\'s and Rashguards.' : 'Ласкаво просимо до SportShop - головного онлайн-постачальника найновішого обладнання для змішаних бойових мистецтв, боксу та фітнесу. Ми також пропонуємо широкий асортимент уніформи та одягу для ММА для тренувань, змагань і вуличного одягу від спортивних брендів, яким ви довіряєте. Незалежно від того, чи ви фанат, боєць чи практикуючий, ми є першим і останнім словом, коли справа доходить до постачання вам усього спеціалізованого обладнання для бойових видів спорту та бойових мистецтв, яке вам потрібно, щоб показати якнайкраще. Купуйте в нашому інтернет-магазині найновіший одяг для MMA та обладнання для тренувань з єдиноборств, зокрема: шорти та рукавички для MMA, боксерські рукавички, футболки для MMA та UFC, спортивні штани BJJ Gi та рашгарди.'}
            </p>
          </div>
          <div className={styles.about__item}>
            <h4 className={styles.about__title}>
              {language === 'EN' ? 'MARTIAL ARTS EQUIPMENT & UNIFORMS' : 'ММА обмундирування та уніформа'}
            </h4>
            <p className={styles.about__paragraph}>
              {language === 'EN' ? 'We\'re the number one choice for athletes when it comes to martial arts and combat sports, with the largest selection of gear and apparel for MMA, Muay Thai, Boxing, Kickboxing, Karate and Taekwondo. Shop for innovative workout equipment and clothing, including: grappling dummies, strength and conditioning gear, and all the uniforms, protective gear and training apparel you\'ll need to push yourself to the absolute limit. Choose from heavyweight brands from the likes of Venum, Ringside Boxing, Fumetsu, Fairtex and so many more.' : 'Ми є вибором номер один для спортсменів, коли мова заходить про бойові мистецтва та єдиноборства, з найбільшим вибором спорядження та одягу для MMA, тайського боксу, боксу, кікбоксингу, карате та тхеквондо. Придбайте інноваційне обладнання та одяг для тренувань, зокрема: манекени для захватів, силове спорядження та спорядження для кондиціонування, а також усю уніформу, захисне спорядження та тренувальний одяг, які вам знадобляться, щоб досягти абсолютного результату. Вибирайте серед таких потужних брендів, як Venum, Ringside Boxing, Fumetsu, Fairtex та багато інших.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
