import FormButton from '@/components/elements/form-button/FormButton';
import { RootState } from '@/redux/store';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useSelector } from 'react-redux';

interface Props {
    sum: number;
}

function Checkout(props: Props) {
    const { sum } = props;
    const t = useTranslations('common');
    const { currency, coefficient } = useSelector((state: RootState) => state.currency);

    return (
        <div className='w-calc-40-16 border border-border-color p-6'>
            <h2 className='font-bold text-2xl font-osvald py-8 border-b border-border-color'>
                {t('order_summary')}
            </h2>
            <p className='py-8'>
                {t('tax_included')}
            </p>
            <div className='flex justify-between items-center mb-8'>
                <span className='font-bold text-xl font-osvald'>
                    {`${t('total')}:`}
                </span>
                <span className='font-bold text-xl font-osvald'>
                    {`${currency} ${(sum * coefficient).toFixed(1).replace(/\.0$/, '')}`}
                </span>
            </div>
            <FormButton>
                Checkout
            </FormButton>
        </div>
    );
}

export default Checkout;