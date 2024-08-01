'use client';
import { CounterBlock } from '@/components/elements/counter-block/CounterBlock';
import { baseUrl } from '@/data/url';
import { RootState } from '@/redux/store';
import { BrandI } from '@/types/main';
import { ProductAdded, ProductPhotoInt } from '@/types/products';
import axios from 'axios';
import Image from 'next/image';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
    product: ProductAdded;
}

function ProductInCart(props: Props) {
    const { product } = props;
    const [images, setImages] = useState<{ arr: ProductPhotoInt[], loading: boolean, error: string }>({ arr: [], loading: true, error: '' });
    const { currency, coefficient } = useSelector((state: RootState) => state.currency);
    const { language } = useSelector((state: RootState) => state.language);
    const [brand, setBrand] = useState<BrandI | null>(null);

    function fetchImages(productId: number) {
        setImages(prev => ({ ...prev, loading: true }));
        axios.get(`${baseUrl}/products-photos/${productId}`)
            .then(response => {
                setImages(prev => ({ ...prev, arr: response.data, loading: false }));
            })
            .catch((e) => {
                setImages(prev => ({ ...prev, loading: false, err: e.message }))
            })
            .finally(() => {
                setImages(prev => ({ ...prev, loading: false }))
            });
    }

    function fetchBrand(brandId: number) {
        axios.get(`${baseUrl}/brands/${brandId}`)
            .then(response => {
                setBrand(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        if (product) {
            fetchImages(product.id);
            fetchBrand(product.BrandSportId);
        }
    }, [product]);

    return (
        <div className='flex justify-between py-10 border-b border-border-color'>
            <div className='flex gap-4'>
                <div>
                    <Image
                        width={90}
                        height={90}
                        src={`${baseUrl}/${images?.arr[0]?.imageUrl}`}
                        alt='image product'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    {brand && (
                        <p className='text-silver'>
                            {brand.name}
                        </p>
                    )}
                    <strong className='font-bold font-osvald block'>
                        {language == 'EN' ? product.name_en : product.name_ukr}
                    </strong>
                    <strong className='font-bold font-osvald block'>
                        {`${currency} ${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')}`}
                    </strong>
                    <div className='flex gap-2 items-center mb-4'>
                        <span className='font-bold font-osvald'>
                            {language === 'EN' ? 'Size:' : 'Розмір:'}
                        </span>
                        <p>
                            {language === 'EN' ? product.variant.name_en : product.variant.name_ukr}
                        </p>
                    </div>
                    <CounterBlock
                        product={product}
                    />
                </div>
            </div>
            <div className='font-bold'>
                {`${currency} ${(product.price * product.quantity * coefficient).toFixed(1).replace(/\.0$/, '')}`}
            </div>
        </div>
    );
}

export default ProductInCart;