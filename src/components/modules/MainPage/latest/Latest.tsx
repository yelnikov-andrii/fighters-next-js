import getLatestProducts from '@/app/lib/getLatestProducts';
import * as React from 'react';
import LatestProductCard from './LatestProductCard';
import { ProductInt } from '@/types/products';
import LatestMarquee from './LatestMarquee';
import ProductCard from '@/components/elements/ProductCard';

async function Latest() {
    const latestProducts = await getLatestProducts();
    return (
        <section>
            <div className='mb-8'>
                <LatestMarquee />
            </div>
            <div className='flex gap-2 justify-between flex-wrap container'>
                {latestProducts.map((product: ProductInt) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default Latest;