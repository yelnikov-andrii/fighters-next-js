'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '@/images/left-arrow.png';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import { closeCart } from '@/redux/slices/cartSlice';
import { ProductInCart } from './ProductInCart';
import Image from 'next/image';
import clsx from 'clsx';
import { Buttons } from './Buttons';

export const CartSide = () => {
  const { cartIsOpen, productsInCart } = useSelector((state: RootState) => state.cart);
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();

  const totalCount = (productsInCart && productsInCart.reduce((init: number, elem: ProductAdded) => init + elem.price * elem.quantity, 0)) || 1;
  const price = `${(totalCount * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`;

  return (
    <div
      className={clsx({
        'fixed top-0 left-0 right-0 bottom-0 z-50 visible transition-all': cartIsOpen,
        '': !cartIsOpen
      })}
      onClick={() => {
        dispatch(closeCart());
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx({
          'bg-white block w-[50%] max-w-[700px] h-screen fixed top-0 left-auto bottom-0 right-0 transition-all duration-500 py-4 px-2': true,
          'right-[-100%]': !cartIsOpen
        })}
      >
        <div
          className='mb-8'
        >
          <Image
            src={arrow}
            alt='arrow'
            onClick={() => {
              dispatch(closeCart());
            }}
            className='rotate-[180deg] cursor-pointer'
            width={40}
            height={20}
          />
        </div>
        <React.Fragment>
          {productsInCart && productsInCart.length > 0 ? (
            <div className="flex flex-col gap-2">
              {productsInCart.map((product: ProductAdded) => (
                <ProductInCart
                  product={product}
                  key={product.id + product.variant.name_en}
                />
              ))}
              <div className='mt-4 text-xl font-bold'>
                {language === 'EN' ? `Total: ${price}` : `Разом: ${price}`}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="m-0 font-bold text-2xl text-center justify-center flex items-center">
                {language === 'EN' ? 'Cart is empty' : 'Кошик порожній'}
              </div>
            </div>
          )}
        </React.Fragment>
        <Buttons />
      </div>
    </div>
  );
};