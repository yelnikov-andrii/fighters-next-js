'use client'
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import LinkButton from '@/components/elements/link-button/LinkButton';

function Account() {
    const t = useTranslations('common');
    const router = useRouter();

    return (
        <section className='py-10'>
            <div className='container'>
                <div className='flex justify-center items-center mb-4'>
                    <LinkButton
                        url='#'
                        style={{ border: '1px solid black', borderRadius: '4px' }}
                        onClick={ async (e) => {
                            e.preventDefault();
                            await fetch("/api/logout", { method: "GET" });
                            window.location.href = "/login";
                        }}
                    >
                        {t('logout')}
                    </LinkButton>
                </div>
                <span className='block h-[1px] bg-[#ccc]'>
                </span>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('account')}
                </h1>
            </div>
        </section>
    );
}

export default Account;