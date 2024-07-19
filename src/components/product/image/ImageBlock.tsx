import React from 'react';
import { ProductPhotoInt } from '@/types/products';
import { MyModal } from '@/components/ui/modal/MyModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './imageblock.module.scss';
import { baseUrl } from '@/data/url';

interface Props {
  photos: ProductPhotoInt[];
}

export const ImageBlock: React.FC <Props> = ({ photos }) => {
  const [active, setActive] = React.useState(false);
  return (
    <div className={styles.imageblock}>
      {photos.length > 0 && active === false && (
        <Image 
          src={`${baseUrl}/${photos[0].imageUrl}`}
          alt=''
          // layout='responsive'
          // width={100}
          // height={100}
          fill
          onClick={() => {
            setActive(true);
          }}
          className='img-full'
        />
      )}
      <MyModal
        active={active}
        setActive={setActive}
      >
        <Swiper
          spaceBetween={50}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={styles.imageblock__swiper}
        >
          {photos.map((photo: ProductPhotoInt) => (
            <SwiperSlide key={photo.id}>
              <Image
                src={`${baseUrl}/${photo.imageUrl}`}
                alt=""
                fill
                // layout='responsive'
                // width={100}
                // height={100}
                className='img-full'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </MyModal>
    </div>
  );
};
