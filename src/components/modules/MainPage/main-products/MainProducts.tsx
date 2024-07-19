import * as React from 'react';
import ProductCard from './ProductCard';

type ProductInt = {
    id: number;
    image: { src: string, alt: string };
    name: string;
    description?: string;
    href: string;
}

function MainProducts(props: { products: ProductInt[] }) {
    const { products } = props;
    return (
        <section className='container py-4'>
            <div className='flex gap-2 justify-between overflow-auto pb-2'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default MainProducts;