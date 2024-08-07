import { baseUrl } from '@/data/url';
import { ProductInt, ProductPhotoInt } from '@/types/products';
import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import clsx from 'clsx';

interface Props {
    query: string;
    language: string;
    inputRef: any;
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Product = (props: { product: ProductInt }) => {
    const [photos, setPhotos] = useState<ProductPhotoInt[]>([]);
    const { product } = props;
    const { language } = useSelector((state: RootState) => state.language);
    const { currency, coefficient } = useSelector((state: RootState) => state.currency);

    useEffect(() => {
        axios.get(`${baseUrl}/products-photos/${product.id}`)
            .then(response => {
                setPhotos(response.data);
            });
    }, [product.id]);

    return (
        <Link className='flex gap-2 items-center' href={`/products/${product.id}`}>
            <Image
                width={70}
                height={70}
                src={`${baseUrl}/${photos[0]?.imageUrl}`}
                alt={product.name_en}
            />
            <div>
                <p>
                    {language === 'EN' ? product.name_en : product.name_ukr}
                </p>
                <b>
                    {`${currency} ${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')}`}
                </b>
            </div>
        </Link>
    );
};

function SearchResults(props: Props) {
    const [products, setProducts] = useState([]);
    const { query, language, inputRef, isVisible, setIsVisible } = props;
    const searchResRef: any = useRef(null);

    useEffect(() => {
        axios.get(`${baseUrl}/products`)
            .then(response => {
                setProducts(response.data);
            });
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (searchResRef.current && !searchResRef?.current?.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const searchedProducts = useMemo(() => {
        if (!query) {
            return [];
        }

        const filteredProducts = products.filter((product: ProductInt) => {
            if (language === 'EN') {
                return product.name_en.toLowerCase().includes(query.toLowerCase());
            } else {
                return product.name_ukr.toLowerCase().includes(query.toLowerCase());
            }
        });
        return filteredProducts;
    }, [query, language, products]);

    if (!isVisible || searchedProducts.length === 0) {
        return null;
    }

    const height = inputRef.current.offsetHeight;

    return (
        <div
            className={clsx(`absolute bottom-0 left-0 right-0 top-[40px] min-h-[500px] bg-white z-50 flex flex-col gap-1 p-4 overflow-y-auto`, {
                'min-h-0': !query
            })}
            ref={searchResRef}
        >
            {searchedProducts?.slice(0, 8).map((product: ProductInt) => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default React.memo(SearchResults);