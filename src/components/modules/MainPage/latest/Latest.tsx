import getLatestProducts from '@/app/lib/getLatestProducts';
import * as React from 'react';
import { ProductInt } from '@/types/products';
import LatestMarquee from './LatestMarquee';
import ProductCard from '@/components/elements/product-card/ProductCard';

async function Latest() {
    const latestProducts = await getLatestProducts();
    return (
        <section>
            <div className='mb-8'>
                <LatestMarquee />
            </div>
            <div className='flex gap-2 justify-center md:justify-between xl:justify-between flex-wrap container'>
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