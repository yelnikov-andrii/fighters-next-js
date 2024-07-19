'use client'
import { baseUrl } from "@/data/url";
import { RootState } from "@/redux/store";
import { ProductInt, ProductPhotoInt } from "@/types/products";
import { Skeleton } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LatestProductCard({ product }: { product: ProductInt }) {
    const [images, setImages] = useState<{ arr: ProductPhotoInt[], loading: boolean, error: string }>({ arr: [], loading: true, error: '' });
    const { language } = useSelector((state: RootState) => state.language);
    const { currency } = useSelector((state: RootState) => state.currency);
    const [isHovered, setIsHovered] = useState(false);

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
        <div className="flex flex-col gap-8 justify-between min-w-[310px] w-[30%] max-w-[360px] min-h-[360px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {!images.loading && images.arr.length > 0 ? (
                <Link href={`products/${product.id}`} className="relative w-full pb-[100%]">
                    <Image
                        src={`${baseUrl}/${images.arr[0].imageUrl}`}
                        alt="sport product"
                        fill
                        className={`img-full transition-opacity duration-500 absolute top-0 left-0 w-full ${isHovered ? 'opacity-0' : ''}`}
                    />
                    <Image
                        src={`${baseUrl}/${images.arr[1].imageUrl}`}
                        alt="sport product"
                        fill
                        className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${isHovered ? '' : 'opacity-0'}`}
                    />
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
                    {`${product.price} ${currency}`}
                </h5>
            </Link>
        </div>
    );
}

export default LatestProductCard;