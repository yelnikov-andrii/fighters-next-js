'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import Image, { StaticImageData } from 'next/image';
import { ElementInt } from '@/types/main';
import styles from './main.module.scss';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import clsx from 'clsx';

interface Props {
  reverse: boolean;
  elements: ElementInt[];
}

export const BannerSecond: React.FC <Props> = ({ reverse, elements, }) => {
  const { language } = useSelector((state: RootState) => state.language);
  return (
    <div
      className={clsx({
        [styles.main__banner]: true,
        [styles['main__banner--reverse']]: reverse
      })}
    >
      <div className={clsx({
        [styles.main__item]: true,
        [styles['main__item--fullwidth']]: true
      })}>
        <Image 
          src={elements[0].img}
          alt={elements[0].imgAlt}
          className={styles.main__img}
          loading="lazy"
          fill={true}
          sizes="100vw"
          style={{height: '100%'}}
        />
        <div
          className={styles.main__txtWrapper}
        >
          <h2
            className={styles.main__h2}
          >
            {language === 'EN' ? elements[0].name_en : elements[0].name_ukr}
          </h2>
          <Link
            href={elements[0].linkUrl}
            className={styles.main__link}
          >
            {language === 'EN' ? 'Shop now' : 'Купити зараз'}
          </Link>
        </div>
      </div>
      <div
        className={clsx({
          [styles.main__item]: true,
          [styles['main__item--column']]: true
        })}
      >
        <React.Fragment>
          {elements.slice(1).map((element: ElementInt) => (
            <div
              key={element.name_en + element.img}
              className={styles.main__imgWrapper}
            >
              <Image 
                src={element.img}
                alt={element.imgAlt}
                className={styles.main__img}
                loading="lazy"
                fill={true}
                sizes="100vw"
                style={{ height: '100%' }}
              />
              <div
                className={clsx({
                  [styles.main__txtWrapper]: true,
                  [styles['main__txtWrapper--small']]: true
                })}
              >
                <h2
                  className={styles.main__h2}
                >
                  {language === 'EN' ? element.name_en : element.name_ukr}
                </h2>
                <Link
                  href={element.linkUrl}
                  className={styles.main__link}
                >
                  {language === 'EN' ? 'Shop now' : 'Купити зараз'}
                </Link>
              </div>
            </div>
          ))}
        </React.Fragment>
      </div>
    </div>
  );
};
