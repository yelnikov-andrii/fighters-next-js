import { useTranslations } from 'next-intl';
import * as React from 'react';

function Privacy() {
    const t = useTranslations('common');
    return (
        <section className='py-20'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('privacy_policy')}
                </h1>
                <div className='text-center'>
                    <p className='max-w-[400px] w-full mb-4 mx-auto'>
                        {t('keep_your_data')}
                    </p>
                    <ol className='text-xl list-decimal font-osvald mx-auto font-bold max-w-[500px] flex flex-col gap-8'>
                        <li>
                            <b className='text-left mb-2 block'>{t('for_your_benefit')}</b>
                            <span className='block text-sm font-normal text-left'>{t('we_use_to_improve')}</span>
                        </li>
                        <li>
                            <b className='text-left mb-2 block'>{t('secure_and_protected')}</b>
                            <span className='block text-sm font-normal text-left'>{t('keep_your_data_safe')}</span>
                        </li>
                        <li>
                            <b className='text-left mb-2 block'>{t('we_not_spam')}</b>
                            <span className='block text-sm font-normal text-left'>{t('your_choose_what_send')}</span>
                        </li>
                        <li>
                            <b className='text-left mb-2 block'>{t('minimal_info')}</b>
                            <span className='block text-sm font-normal text-left'>{t('we_keep_only_important')}</span>
                        </li>
                        <li>
                            <b className='text-left mb-2 block'>{t('just_let_us_know')}</b>
                            <span className='block text-sm font-normal text-left'>{t('if_you_want_delete')}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Privacy;