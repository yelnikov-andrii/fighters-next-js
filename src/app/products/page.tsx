import Products from '@/components/templates/products/Products';
import React from 'react'
import { getProducts } from '../lib/getProducts';

export default async function Page(params: any) {
    const searchParams = params.searchParams;
    const data = await getProducts(searchParams);

    return (
        <Products
            data={data}
        />
    )
}
