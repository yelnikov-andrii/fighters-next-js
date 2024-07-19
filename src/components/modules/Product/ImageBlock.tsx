import { ProductPhotoInt } from '@/types/products';
import * as React from 'react';
import Image from 'next/image';
import { baseUrl } from '@/data/url';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useRef, useState } from 'react';
import clsx from 'clsx';

interface Props {
    photos: ProductPhotoInt[];
}

function ImageBlock({ photos }: Props) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

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
        <div className="w-full md:w-calc-50-16 ">
            <Swiper
                spaceBetween={50}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                slidesPerView={1}
                modules={[Navigation]}
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                className='relative'
            >
                {photos.map((photo: ProductPhotoInt) => (
                    <SwiperSlide key={photo.id}>
                        <Image
                            src={`${baseUrl}/${photo.imageUrl}`}
                            width={600}
                            height={600}
                            alt=""
                            className='img-full'
                        />
                    </SwiperSlide>
                ))}
                <div className='absolute top-[50%] z-20 flex justify-between w-full px-8'>
                    <button className={clsx('prev bg-white p-2 rounded-sm', {
                        'opacity-50': isBeginning
                    })} disabled={isBeginning}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"></path></svg>
                    </button>
                    <button className={clsx('next bg-white p-2 rounded-sm', {
                        'opacity-50': isEnd
                    })} disabled={isEnd}>
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
                    </button>
                </div>
            </Swiper>
        </div>
    );
}

export default ImageBlock;