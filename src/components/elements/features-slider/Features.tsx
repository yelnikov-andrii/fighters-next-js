'use client';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigation } from 'swiper/modules';
import { reviews, averageRating } from '@/data/main';
import Image from 'next/image';

function Features() {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
    const t = useTranslations('common');

    interface FeatureI {
        title: string;
        description: string;
        img: string;
        alt: string;
    }

    const features: FeatureI[] = [
        {
            title: 'next_day_delivery',
            description: 'available_before_12',
            img: '/fast-delivery.png',
            alt: 'Fast delivery'
        },
        {
            title: 'free_delivery_over',
            description: 'except_oversized',
            img: '/free.png',
            alt: 'Free delivery'
        },
        {
            title: 'hassle_return',
            description: 'via_portal',
            img: '/back.png',
            alt: 'Hussle return'
        },
        {
            title: 'price_match',
            description: 'found_cheaper',
            img: '/best-price.png',
            alt: 'Best price'
        },
        {
            title: 'customer_reviews',
            description: 'rated',
            img: '/star.png',
            alt: 'Reviews'
        },
        {
            title: 'ukr_largest_shop',
            description: 'happy_customers',
            img: '/boxing-glove-icon.png',
            alt: 'Largest shop'
        },
        {
            title: 'expert_support',
            description: 'in_your_corner',
            img: '/judo.png',
            alt: 'Expert support'
        },
        {
            title: 'regular_sales',
            description: 'unrivalled_deals',
            img: '/flash-sale.png',
            alt: 'Unrivalled deals'
        }
    ];

    const handleSwiper = (swiper: any) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSlideChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className='bg-gray-light'>
            <div className='container'>
                <div className='flex gap-2 flex-col md:flex-row'>
                    <div className='flex gap-4 w-full'>
                        <div className='prev-features flex flex-col justify-center'>
                            <button disabled={isBeginning} className={clsx({
                                'opacity-50': isBeginning
                            })}>
                                <ArrowBackIosIcon />
                            </button>
                        </div>
                        <div className='overflow-hidden'>
                            <Swiper
                                navigation={{
                                    prevEl: '.prev-features',
                                    nextEl: '.next-features',
                                }}
                                onSwiper={handleSwiper}
                                onSlideChange={handleSlideChange}
                                modules={[Navigation]}
                                slidesPerView={4}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                        spaceBetween: 40
                                    }
                                }}
                                spaceBetween={30}
                                className='py-8'
                            >
                                {features.map((feature: FeatureI) => (
                                    <SwiperSlide key={feature.title} className='py-4 px-2'>
                                        <div className='flex flex-col justtify-between items-center p-2'>
                                            <Image 
                                              src={feature.img}
                                              alt={feature.alt}
                                              width={32}
                                              height={32}
                                              className='mb-4'
                                            />
                                            <strong className='font-bold font-osvald text-sm'>{feature.title === 'customer_reviews' ? `${reviews.length} ${t('customer_reviews')}` : t(`${feature.title}`)}</strong>
                                            <p>
                                            {feature.description === 'rated' ? `${averageRating} ${t('rated')}` : t(`${feature.description}`)}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='next-features flex flex-col justify-center'>
                            <button disabled={isEnd} className={clsx({
                                'opacity-50': isEnd
                            })}>
                                <ArrowForwardIosIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;