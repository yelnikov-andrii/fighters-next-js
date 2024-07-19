import React from 'react'
import Marquee from '@/components/elements/marquee/Marquee';
import { useTranslations } from 'next-intl';
import MainProducts from '@/components/modules/MainPage/main-products/MainProducts';
import BannerMain from '@/components/modules/MainPage/banners/BannerMain';
import BannerSecond from '@/components/modules/MainPage/banners/BannerSecond';
import Latest from '@/components/modules/MainPage/latest/Latest';
import MainBrands from '@/components/modules/MainPage/mainbrands/MainBrands';
import MainMedia from '@/components/modules/MainPage/main-media/MainMedia';
import MainReviews from '@/components/modules/MainPage/main-reviews/MainReviews';
import BackBlock from '@/components/elements/BackBlock';

const Main = () => {
  const t = useTranslations('common');

  return (
    <div className='pb-24'>
      <BannerMain />
      <Marquee
        images={[
          {
            src: '/boxing-gloves.png',
            alt: 'Boxing gloves'
          },
          {
            src: '/boxing-shoes.png',
            alt: 'Boxing shoes'
          }
        ]}
        h2={t("boxing_essentials")}
        p={t("up_your_level")}
        href='/products?category=1'
        direct={true}
      />
      <div className='mb-8'>
        <MainProducts
          products={[
            {
              id: 1,
              image: { src: '/boxing-gloves-card.png', alt: 'Boxing gloves' },
              name: t('boxing_gloves'),
              description: t('looking_for_gloves'),
              href: '/products?subcategory=1'
            },
            {
              id: 2,
              image: { src: '/boxing-shoes-card.png', alt: 'Boxing shoes' },
              name: t('boxing_boots'),
              description: t('train_in_boots'),
              href: '/products?subsubcategory=10'
            },
            {
              id: 3,
              image: { src: '/boxing-bags-card.png', alt: 'Punch bags' },
              name: t('punch_bags'),
              description: t('elite_heavy_bags'),
              href: '/products?subcategory=3'
            },
            {
              id: 4,
              image: { src: '/boxing-protection-card.png', alt: 'Boxing protection' },
              name: t('boxing_protection'),
              description: t('essential_boxing_protection'),
              href: '/products?subcategory=2'
            },
          ]}
        />
      </div>
      <BannerSecond />
      <Marquee
        images={[
          {
            src: '/gi-icon.png',
            alt: 'Gi trousers'
          },
          {
            src: '/judo-icon.png',
            alt: 'Gi'
          }
        ]}
        h2={t("ultimate_jiu_selection")}
        p={t("for_mats")}
        href='/products?subcategory=8'
        direct={false}
      />
      <div className='mb-8'>
        <MainProducts
          products={[
            {
              id: 1,
              image: { src: '/gi-card.png', alt: 'Gi' },
              name: t('gis'),
              href: '/products?subcategory=7'
            },
            {
              id: 2,
              image: { src: '/rashguards-card.png', alt: 'Rash guards' },
              name: t('rash_guards'),
              href: '/products?subsubcategory=20'
            },
            {
              id: 3,
              image: { src: '/shorts-card.png', alt: 'Shorts' },
              name: t('fight_shorts'),
              href: '/products?subsubcategory=21'
            },
            {
              id: 4,
              image: { src: '/mma-gloves-card.png', alt: 'Mma gloves' },
              name: t('mma_gloves'),
              href: '/products?subsubcategory=22'
            },
          ]}
        />
      </div>
      <div className='mb-16'>
        <Latest />
      </div>
      <div className='mb-16'>
        <MainBrands />
      </div>
      <div className='mb-8'>
        <MainMedia />
      </div>
      <div className='mb-8'>
        <MainReviews />
      </div>
      <BackBlock />
    </div>
  )
}

export default Main;
