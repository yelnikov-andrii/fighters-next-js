import MainFAQ from '@/components/modules/faq/MainFAQ';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as React from 'react';

function HelpAndFAQ() {
    const t = useTranslations('common');

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='relative h-[316px] flex items-center justify-center'>
                    <h1 className='text-white text-center text-4xl font-osvald font-bold'>
                        {t('how_to_help')}
                    </h1>
                    <Image 
                      src="/help-banner.png"
                      alt='Help banner'
                      fill
                      objectFit='cover'
                      objectPosition='20% 20%'
                      style={{zIndex: '-1'}}
                    />
                </div>
                <h2 className='my-10 font-medium text-2xl font-osvald'>
                    {t('get_more_info')}
                </h2>
                <MainFAQ /> 
            </div>
        </section>
    );
}

export default HelpAndFAQ;