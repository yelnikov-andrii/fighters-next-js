import { RootState } from '@/redux/store';
import { ProductInt, VariantInt } from '@/types/products';
import clsx from 'clsx';
import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslations } from 'next-intl';
import { addProductIntoCart } from '@/helpers/addProductIntoCart';
import { addProductToCart } from '@/redux/slices/cartSlice';

interface Props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  selectedVariant: VariantInt | null;
  product: ProductInt;
}

function Quantity(props: Props) {
  const t = useTranslations('common');
  const { language } = useSelector((state: RootState) => state.language);
  const [quantityError, setQuantityError] = useState('');
  const [afterAddedMessage, setAfterAddedMessage] = useState('');
  const { quantity, setQuantity, selectedVariant, product } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    if (quantityError) {
      setTimeout(() => {
        setQuantityError('');
      }, 3000);
    }

    if (afterAddedMessage) {
      setTimeout(() => {
        setAfterAddedMessage('');
      }, 3000);
    }
  }, [quantityError, afterAddedMessage]);

  return (
    <div className='py-4 pb-8 border-border-color border-b'>
      <div className='flex gap-2 items-center'>
        <div className='border border-black rounded-sm flex gap-1 items-center'>
          <button
            className={clsx({
              'w-12 h-12 cursor-pointer': true,
              '': quantity <= 1,
            })}
            disabled={quantity === 1}
            onClick={() => {
              if (quantity > 1) {
                setQuantity(prev => prev - 1);
              }
            }}
          >
            <RemoveIcon />
          </button>
          <input
            className='w-16 h-12 pl-4 outline-none'
            value={quantity}
            onChange={(e) => {
              const value = +e.target.value;
              if (!isNaN(value)) {
                setQuantity(value);
              }
            }}
          />
          <button
            className={clsx({
              'w-12 h-12 cursor-pointer': true,
              '': quantity >= (selectedVariant?.quantity || 0)
            })}
            disabled={quantity >= (selectedVariant?.quantity || 0)}
            onClick={() => {
              setQuantity(prev => prev + 1);
            }}
          >
            <AddIcon />
          </button>
        </div>
        <button
          className='bg-green h-12 text-black font-bold font-osvald min-w-36 w-full'
          onClick={() => {
            addProductIntoCart(selectedVariant, quantity, language, setQuantityError, product, dispatch, addProductToCart, setAfterAddedMessage);
          }}
        >
          {t("add_to_cart")}
        </button>
      </div>
      <p className='text-red'>
        {quantityError}
      </p>
      <p className='text-green'>
        {afterAddedMessage}
      </p>
    </div>
  );
};

export default Quantity;