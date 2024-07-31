import { useTranslations } from 'next-intl';
import * as React from 'react';

function Terms() {
    const t = useTranslations('common');

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('terms_of_service')}
                </h1>
                <p className='max-w-[800px] mx-auto text-center'>
                    {t('terms_weclome')}
                </p>
            </div>
        </section>
    );
}

export default Terms;