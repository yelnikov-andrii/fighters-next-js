import * as React from 'react';
import { BrandI } from "@/types/main";
import Image from 'next/image';
import { baseUrl } from '@/data/url';
import LinkButton from '@/components/elements/link-button/LinkButton';
import { useTranslations } from 'next-intl';
import NavBrands from './NavBrands';

function Brands({ brands }: { brands: BrandI[] }) {
    const t = useTranslations('common');

    return (
        <div className='flex flex-col sm:flex-row container gap-16 md:gap-8 flex-wrap justify-center items-center sm:items-center md:items-stetch sm:justify-center md:justify-between xl:justify-between'>
            {brands.slice(0, 4).map(brand => (
                <div className='w-[100%] md:w-[45%] lg:w-[25%] xl:w-[20%] flex flex-col justify-between min-w-[230px] max-w-[320px]'>
                        <Image
                            src={`${baseUrl}/${brand.img}`}
                            alt={brand.name}
                            width={100}
                            height={100}
                            className='img-full shadow-lg min-h-[225px] object-contain'
                        />
                    <div className='bg-gray-light py-4 px-2'>
                        <h5 className='font-bold font-osvald text-lg uppercase'>
                            {brand.name}
                        </h5>
                    </div>
                    <NavBrands
                        brand={brand}
                    />
                    <LinkButton url={`/products?brands=${brand.name}`} style={{ border: '1px solid black', borderRadius: '4px', minWidth: '130px', display: 'flex', justifyContent: 'center' }}>
                        {`${t('shop_all')} ${brand.name}`}
                    </LinkButton>
                </div>
            ))}
        </div>
    );
}

export default Brands;