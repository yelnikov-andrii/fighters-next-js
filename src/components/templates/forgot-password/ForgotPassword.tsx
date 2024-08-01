'use client'
import FormButton from '@/components/elements/form-button/FormButton';
import FormInput from '@/components/elements/input/FormInput';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

function ForgotPassword() {
    const t = useTranslations('common');
    const [email, setEmail] = useState('');

    function handleChange(obj: { value: string, name: string }) {
        setEmail(obj.value);
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-6'>
                    {t('reset_password')}
                </h1>
                <p className='text-center mb-8'>
                    {t('we_will_send')}
                </p>
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6'>
                    <FormInput
                        label='Email'
                        placeholder='Email'
                        type='email'
                        value={email}
                        name='email'
                        change={handleChange}
                    />
                    <FormButton>
                        {t('submit')}
                    </FormButton>
                    <Link href="/account/login" className='self-center underline hover:text-silver transition-all'>
                        {t('cancel')}
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default ForgotPassword;