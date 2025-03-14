'use client';
import * as React from 'react';
import { baseUrl } from "@/data/url";
import { RootState } from "@/redux/store";
import { ProductInt, ProductPhotoInt } from "@/types/products";
import { Skeleton } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clsx from 'clsx';

function ProductCard({ product, style }: { product: ProductInt, style?: any }) {
    const [images, setImages] = useState<{ arr: ProductPhotoInt[], loading: boolean, error: string }>({ arr: [], loading: true, error: '' });
    const { language } = useSelector((state: RootState) => state.language);
    const { currency, coefficient } = useSelector((state: RootState) => state.currency);
    const [isHovered, setIsHovered] = useState(false);
    const listView = useSelector((state: RootState) => state.listView.listView);

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

    useEffect(() => {
        if (product) {
            fetchImages(product.id);
        }
    }, [product]);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            className={clsx("flex gap-8 min-w-[310px] w-[30%] max-w-[360px] min-h-[360px] px-2 md:px-4", {
                "flex-row w-full max-w-full justify-start gap-2": listView === 'column',
                "flex-col justify-between": listView === 'row'
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            {!images.loading && images.arr.length > 0 ? (
                <Link href={`products/${product.id}`} className={clsx("relative w-full pb-[100%]", {
                    "max-w-[360px] pb-0": listView === 'column',
                })}>
                    <Image
                        src={`${baseUrl}/${images?.arr[0]?.imageUrl}`}
                        alt="sport product"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        className={`img-full transition-opacity duration-500 absolute top-0 left-0 w-full ${isHovered ? 'opacity-0' : ''}`}
                    />
                    {images?.arr[1] ?
                        <Image
                            src={`${baseUrl}/${images?.arr[1]?.imageUrl}`}
                            alt="sport product"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${isHovered ? '' : 'opacity-0'}`}
                        /> :
                        <Image
                            src={`${baseUrl}/${images?.arr[0]?.imageUrl}`}
                            alt="sport product"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${isHovered ? '' : 'opacity-0'}`}
                        />
                    }
                </Link>
            ) : (
                <div>
                    <Skeleton variant="rectangular" className="w-full h-[360px]" />
                </div>
            )}
            <Link href={`products/${product.id}`} className="flex flex-col gap-4">
                <h4 className="font-bold">
                    {language === 'EN' ? product.name_en : product.name_ukr}
                </h4>
                <h5 className="font-bold">
                    {`${currency} ${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')}`}
                </h5>
            </Link>
        </div>
    );
}

export default ProductCard;