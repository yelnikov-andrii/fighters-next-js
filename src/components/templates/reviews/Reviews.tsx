import BasicRating from '@/components/elements/BasicRating';
import { averageRating, reviews } from '@/data/main';
import { Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Reviews = () => {
    const t = useTranslations('common');

    return (
        <div className='max-w-[768px] px-8 mx-auto'>
            <section className='pt-12 pb-20'>
                <h1 className='text-5xl font-bold font-osvald text-center uppercase mb-8'>
                    <span>Fighters</span> <span className='uppercase'>{t('reviews')}</span>
                </h1>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='max-w-[768px]'>
                        <Image
                            src="/our-reviews.png"
                            alt='Reviews'
                            width={768}
                            height={312}
                            className='img-full'
                        />
                    </div>
                    <p>
                        {t('trustworthy')}
                    </p>
                    <div className='flex gap-2 items-center self-start mb-4 border-b border-border-color w-full'>
                        <strong className='text-3xl'>
                            {averageRating}
                        </strong>
                        <BasicRating
                            value={+averageRating}
                        />
                    </div>
                    <div className='self-start'>
                        {reviews.map(review => (
                            <div key={review.id} className='py-4 h-[50%] px-2'>
                                <div className='flex gap-10 shadow-xl p-2 min-h-[240px] w-full'>
                                    <div className='flex flex-col gap-4 pr-10 border-r border-border-color w-[20%]'>
                                        <Avatar sx={{ width: '60px', height: '60px', color: 'black', fontWeight: 'bold' }}>
                                            {review.user.slice(0, 1)}
                                        </Avatar>
                                        <strong className='font-bold'>
                                            {review.user}
                                        </strong>
                                    </div>
                                    <div className='w-[70%]'>
                                        <div className='flex mb-4'>
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Reviews;
