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

const Main = () => {
  const t = useTranslations('common');

  return (
    <div className='pb-8'>
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
        href='/products?category=Boxing'
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
              href: '/products?subcategory=Gloves'
            },
            {
              id: 2,
              image: { src: '/boxing-shoes-card.png', alt: 'Boxing shoes' },
              name: t('boxing_boots'),
              description: t('train_in_boots'),
              href: '/products?subsubcategory=BOXING BOOTS'
            },
            {
              id: 3,
              image: { src: '/boxing-bags-card.png', alt: 'Punch bags' },
              name: t('punch_bags'),
              description: t('elite_heavy_bags'),
              href: '/products?subcategory=Punch-bags-and-Accessories'
            },
            {
              id: 4,
              image: { src: '/boxing-protection-card.png', alt: 'Boxing protection' },
              name: t('boxing_protection'),
              description: t('essential_boxing_protection'),
              href: '/products?subcategory=Protection'
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
        href='/products?subcategory=No-gi-Jiu-Jitsu'
        direct={false}
      />
      <div className='mb-8'>
        <MainProducts
          products={[
            {
              id: 1,
              image: { src: '/gi-card.png', alt: 'Gi' },
              name: t('gis'),
              href: '/products?subcategory=Jiu-Jitsu-Gi%27s'
            },
            {
              id: 2,
              image: { src: '/rashguards-card.png', alt: 'Rash guards' },
              name: t('rash_guards'),
              href: '/products?subsubcategory=RASH-GUARDS'
            },
            {
              id: 3,
              image: { src: '/shorts-card.png', alt: 'Shorts' },
              name: t('fight_shorts'),
              href: '/products?subsubcategory=NO-GI-SHORTS'
            },
            {
              id: 4,
              image: { src: '/mma-gloves-card.png', alt: 'Mma gloves' },
              name: t('mma_gloves'),
              href: '/products?subsubcategory=MMA-Training-Gloves'
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
      <div className='mb-2 md:mb-8'>
        <MainReviews />
      </div>
    </div>
  )
}

export default Main;
