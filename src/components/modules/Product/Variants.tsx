import React, { Dispatch, SetStateAction } from 'react';
import { VariantInt } from '@/types/products';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import clsx from 'clsx';

interface Props {
    variants: VariantInt[];
    selectedVariant: VariantInt | null;
    setSelectedVariant: Dispatch<SetStateAction<VariantInt | null>>;
}

function Variants({ variants, selectedVariant, setSelectedVariant }: Props) {
    const { language } = useSelector((state: RootState) => state.language);

    return (
        <div className='pb-8 pt-4 border-border-color border-b'>
            {selectedVariant && (
                selectedVariant.quantity > 0 ?
                    <p className='text-xl mb-4'>
                        {language === 'EN' ? 'In stock' : 'В наявності'}
                    </p>
                    :
                    <p
                        className={selectedVariant.quantity === 0 ? 'text-xl mb-4 text-red' : 'text-xl mb-4'}
                    >
                        {language === 'EN' ? 'No in stock' : 'Немає в наявності'}
                    </p>
            )}
            <p className='font-bold text-sm mb-2'>
                {language === 'EN' ? 'Size' : 'Розмір'}
            </p>
            <div className='flex gap-2'>
                {variants && variants.map((variant: VariantInt) => (
                    <div
                        className={clsx('border border-black border-[2px] p-1 rounded-md cursor-pointer font-medium', {
                            'border-[3.5px] bg-white': selectedVariant?.id === variant.id,
                            'opacity-50 border-[0.8px]': variant?.quantity === 0
                        })}
                        onClick={() => {
                            setSelectedVariant(variant);
                        }}
                        key={variant.id}
                    >
                        {language === 'EN' ? variant.name_en : variant.name_ukr}
                    </div>
                ))}
            </div>
        </div>
    );
};

const MemoizedVariants = React.memo(Variants);
export { MemoizedVariants as Variants };