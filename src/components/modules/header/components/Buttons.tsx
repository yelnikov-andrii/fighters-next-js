import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { closeCart } from '@/redux/slices/cartSlice';

export const Buttons = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 flex flex-col gap-4 items-center">
      <Link
        className="h-12 cursor-pointer max-w-[140px] min-w-[120px] w-full text-white border-none outline-none px-2 py-4 flex rounded-sm justify-center items-center"
        href="/cart"
        onClick={() => {
          dispatch(closeCart());
        }}
      >
        {language === 'EN' ? 'View cart' : 'До кошику'}
      </Link>
      <Link
        className="h-12 cursor-pointer max-w-[140px] min-w-[120px] w-full text-white border-none outline-none px-2 py-4 flex rounded-sm justify-center items-center"
        href="/checkout"
        onClick={() => {
          dispatch(closeCart());
        }}
      >
        {language === 'EN' ? 'Go to checkout' : 'Перейти до оплати'}
      </Link>
    </div>
  )
}
