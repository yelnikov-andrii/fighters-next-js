'use client'
import { baseUrl } from '@/data/url';
import { fetchPhotos } from '@/redux/action-creator/Products/fetchPhotosOneProduct';
import { RootState } from '@/redux/store';
import { BrandInt, ProductInt, VariantInt } from '@/types/products';
import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotosLoading from './PhotosLoading';
import ImageBlock from './ImageBlock';
import InfoBlock from './InfoBlock';
import BreadCrumbs from './Breadcrumbs';

interface Props {
    product: ProductInt;
}

function Product({ product }: Props) {
    const dispatch = useDispatch();
    const [variants, setVariants] = React.useState<VariantInt[]>([]);
    const [brand, setBrand] = React.useState<BrandInt | null>(null);

    const { photos, photosError, photosLoading } = useSelector((state: RootState) => state.photos);

    async function fetchVariants(productId: string) {
        try {
            const response = await axios.get(`${baseUrl}/variants/${productId}`);
            setVariants(response.data);
        }

        catch (e) {
        }
    }

    async function fetchBrand(brandId: number) {
        try {
            const response = await axios.get(`${baseUrl}/brands/${brandId}`);
            setBrand(response.data);
        }

        catch (e) {
        }
    }

    React.useEffect(() => {
        if (product) {
            dispatch(fetchPhotos(product.id));
        }
    }, [product]);

    React.useEffect(() => {
        if (product) {
            fetchVariants(product.id.toString());
        }
    }, [product]);

    React.useEffect(() => {
        if (product) {
            fetchBrand(product.BrandSportId);
        }
    }, [product]);

    return (
        <div className="px-8 py-16">
            <BreadCrumbs 
              product={product}
            />
            <div className="flex gap-[32px] flex-col md:flex-row">
                {photosLoading ? (
                    <PhotosLoading />
                ) : (
                    <ImageBlock
                        photos={photos}
                    />
                )}
                {photosError && (
                    <div>
                        {photosError}
                    </div>
                )}
                <InfoBlock
                    product={product}
                    variants={variants}
                    brand={brand}
                />
            </div>
        </div>
    );
};

export default Product;