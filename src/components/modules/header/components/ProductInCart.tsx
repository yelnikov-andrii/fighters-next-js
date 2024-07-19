import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import { ProductAdded } from '@/types/products';
import { CounterBlock } from './CounterBlock';

interface Props {
  product: ProductAdded;
}

export const ProductInCart: React.FC<Props> = ({ product }) => {
  const { language } = useSelector((state: RootState) => state.language);
  const { currency, coefficient } = useSelector((state: RootState) => state.currency);
  const price = `${(product.price * coefficient).toFixed(1).replace(/\.0$/, '')} ${currency}`;

  const dispatch = useDispatch();

  return (
    <>
      <div className='flex justify-center items-center gap-2 px-2 py-4 border-b border-border-color overflow-x-auto'>
        <h4 className='m-0 font-bold text-lg w-content inline-block'>
          {language === 'EN' ? product.name_en : product.name_ukr}
        </h4>
        <h5 className='m-0 font-bold'>
          {language === 'EN' ? `Size: ${product.variant.name_en}` : `Розмір: ${product.variant.name_ukr}`}
        </h5>
        <CounterBlock
          product={product}
        />
        <h5 className='m-0 font-bold min-w-20'>
          {language === 'EN' ? `Price - ${price}` : `Ціна - ${price}`}
        </h5>
        <div>
          <button
            onClick={() => {
              dispatch(deleteProduct(product));
            }}
            className='text-xl font-medium border border-border-color border-[1px] rounde-sm cursor-pointer'
          >
            &#10006;
          </button>
        </div>
      </div>
    </>
  );
};
