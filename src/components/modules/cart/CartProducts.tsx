'use client'
import EmptyCart from '@/components/elements/empty-cart/EmptyCart';
import { setTotalSum } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductInCart from './ProductInCart';
import Checkout from './Checkout';

function CartProducts() {
    const { productsInCart } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const sum = useMemo(() => {
        const totalSumOfPurchase: number = productsInCart?.reduce((initial: number, product: ProductAdded) => {
            const sum = product.price * product.quantity;
            return initial + sum;
        }, 0) || 0;

        return totalSumOfPurchase;
    }, [productsInCart]);

    useEffect(() => {
        dispatch(setTotalSum(sum));
    }, [productsInCart])

    return (
        <div>
            {productsInCart && productsInCart.length > 0 ? (
                <div className='flex gap-[32px]'>
                    <div className='w-calc-60-16 flex flex-col gap-4 pr-16'>
                        {productsInCart.map(product => (
                            <ProductInCart
                                product={product}
                            />
                        ))}
                    </div>
                    <Checkout 
                      sum={sum}
                    />
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}

export default CartProducts;