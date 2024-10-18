import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as React from 'react';

const StrongBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <strong className='text-silver mb-1'>
            {children}
        </strong>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='mb-8'>
            {children}
        </p>
    )
}

function Delivery() {
    const t = useTranslations('common');

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='uppercase text-center text-4xl font-osvald font-bold mb-4'>
                    {t('united_kingdom')}
                </h1>
                <div className='mx-auto md:max-w-[760px]'>
                    <StrongBlock>
                        {t("standart_delivery")}
                    </StrongBlock>
                    <Paragraph>
                        {t('standart_delivery_desc')}
                    </Paragraph>
                    <StrongBlock>
                        {t('express_delivery')}
                    </StrongBlock>
                    <Paragraph>
                        {t('express_delivery_desc')}
                    </Paragraph>
                    <StrongBlock>
                        {t('oversized_orders')}
                    </StrongBlock>
                    <Paragraph>
                        {t('oversized_orders_desc')}
                    </Paragraph>
                    <StrongBlock>
                        {t('returns')}
                    </StrongBlock>
                    <Paragraph>
                        {t('returns_desc')}
                    </Paragraph>
                </div>
            </div>
        </section>
    );
}

export default Delivery;