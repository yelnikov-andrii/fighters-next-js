import CartProducts from '@/components/modules/cart/CartProducts';
import { useTranslations } from 'next-intl';
import * as React from 'react';

function Cart() {
    const t = useTranslations('common');

    return (
        <section className='py-20'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('your_cart')}
                </h1>
                <CartProducts />
            </div>
        </section>
    );
}

export default Cart;