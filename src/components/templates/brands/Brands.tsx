import Button from '@/components/elements/Button';
import { baseUrl } from '@/data/url';
import { BrandI } from '@/types/main';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Brands({ brands }: { brands: BrandI[] }) {
    const t = useTranslations('common');

    return (
        <section className='py-8'>
            <div className='container'>
                <h1 className='text-center text-3xl uppercase font-osvald font-bold mb-12'>
                    {t('a_z_brands')}
                </h1>
                <div className='flex gap-4 gap-y-10 flex-wrap justify-between'>
                    {brands.sort((brandA: BrandI, brandB: BrandI) => brandA.name.localeCompare(brandB.name)).map(brand => (
                        <div className='w-[30%]'>
                            <Image
                                src={`${baseUrl}/${brand.img}`}
                                alt={brand.name}
                                width={300}
                                height={350}
                                className='img-full min-h-[350px] mb-4'
                            />
                            <h2 className='text-xl font-bold font-osvald uppercase mb-4'>
                                {brand.name}
                            </h2>
                            <Button
                                url={`/products?brands=${brand.name}`}
                                style={{ borderRadius: '50%', border: '1px solid black' }}
                            >
                                <ArrowForwardIcon />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;