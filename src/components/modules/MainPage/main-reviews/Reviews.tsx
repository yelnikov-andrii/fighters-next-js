'use client'
import * as React from 'react';
import { reviews, averageRating } from '@/data/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import BasicRating from '@/components/elements/BasicRating';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

function Reviews() {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
    const t = useTranslations('common');

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
        <div className='md:container px-2 md:px-none reviews'>
            <div className='flex gap-2 flex-col items-center md:items-none md:flex-row'>
                <div className='w-[100%] max-w-[450px] mb-8 md:mb-0 md:max-w-none md:w-[18%] shadow-xl bg-gray-light p-2 min-w-[240px] flex flex-col justify-center items-center'>
                    <b>
                        {t("excellent")}
                    </b>
                    <BasicRating
                        value={+averageRating}
                    />
                    <p>
                        {averageRating} {t("average")}
                    </p>
                    <p>
                        {reviews.length} {t("reviews")}
                    </p>
                </div>
                <div className='flex gap-1 md:gap-4 w-[100%] md:w-[80%] max-w-[450px] md:max-w-none'>
                    <div className='prev flex flex-col justify-center'>
                        <button disabled={isBeginning} className={clsx({
                            'opacity-50': isBeginning
                        })}>
                            <ArrowBackIosIcon />
                        </button>
                    </div>
                    <div className='overflow-hidden'>
                        <Swiper
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
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
                                    slidesPerView: 1,
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
                            {reviews.map(review => (
                                <SwiperSlide key={review.id} className='py-4 h-[50%] px-2'>
                                    <div className='flex flex-col justtify-between shadow-xl p-2 min-h-[240px]'>
                                        <div className='flex gap-2 items-center'>
                                            <h6 className='font-bold font-osvald text-sm'>{review.user}</h6>
                                            <BasicRating
                                                value={review.rating}
                                            />
                                        </div>
                                        <p className='mb-8'>
                                            {review.body.length < 120 ? review.body : review.body.slice(0, 120)}
                                        </p>
                                        <p className='flex justify-end'>
                                            {review.date}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='next flex flex-col justify-center'>
                        <button disabled={isEnd} className={clsx({
                            'opacity-50': isEnd
                        })}>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;