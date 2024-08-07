'use client'
import ProductCard from '@/components/elements/product-card/ProductCard';
import { RootState } from '@/redux/store';
import { ProductInt } from '@/types/products';
import * as React from 'react';
import Pagination from './Pagination';
import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';

function List({ data }: { data: any }) {
    const { filterIsOpen } = useSelector((state: RootState) => state.filter);

    return (
        <div className="py-4">
            <div className='flex gap-[8px] md:gap-[16px] lg:gap-[32px]'>
                {filterIsOpen && (
                    <div className='w-calc-50-4 md:w-calc-50-8 lg:w-calc-33-16 xl:w-calc-25-16'>
                        <Filter productsAllPages={data?.allProducts} />
                    </div>
                )}
                <div className={clsx('flex flex-wrap', {
                    'w-calc-50-4 md:w-calc-50-8 lg:w-calc-66-16 xl:w-calc-75-16': filterIsOpen
                })}>
                    {(data?.data?.rows?.length > 0) ? data?.data?.rows.map((product: ProductInt) => (
                        <div className={clsx({
                            'w-[100%] md:w-[100%] lg:w-[50%] xl:w-[33%]': filterIsOpen,
                            'w-[50%] md:w-[50%] lg:w-[33%] xl:w-[25%]': !filterIsOpen
                        })} key={product.id}>
                            <ProductCard
                                product={product}
                                style={{ width: '100%' }}
                            />
                        </div>
                    )) : (
                        <div>
                            {/* {language === 'EN' ? 'No products' : 'Немає продуктів'} */}
                            No products
                        </div>
                    )}
                </div>
            </div>
            {(data?.data?.rows?.length > 0) && (
                <Pagination
                    countOfProducts={data?.data?.count}
                />
            )}
        </div>
    );
}

export default List;