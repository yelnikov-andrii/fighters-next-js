import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseProduct, increaseProduct } from '@/redux/slices/cartSlice';
import { ProductAdded } from '@/types/products';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Props {
  product: ProductAdded;
}

export const CounterBlock: React.FC <Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-center border border-border-color w-max">
      <button
        className='w-12 h-12 flex justify-center items-center cursor-pointer bg-transparent rounded-sm ountline-none'
        onClick={() => {
          dispatch(decreaseProduct(product));
        }}
      >
        <RemoveIcon />
      </button>
      <input 
        value={product.quantity}
        onChange={(e) => {
          const value = +e.target.value;
          if (!isNaN(value)) {
          }
        }}
        className='w-12 h-12 rounded-sm py-2'
      />
      <button
        className='w-12 h-12 flex justify-center items-center cursor-pointer bg-transparent rounded-sm ountline-none'
        onClick={() => {
          dispatch(increaseProduct(product));
        }}
      >
        <AddIcon />
      </button>
    </div>
  );
};

