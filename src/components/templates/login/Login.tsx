'use client'
import * as React from 'react';
import { useTranslations } from 'next-intl';
import FormInput from '@/components/elements/input/FormInput';
import { useState } from 'react';
import FormButton from '@/components/elements/FormButton';
import Link from 'next/link';

function Login() {
    const t = useTranslations('common');
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    function onchangeHandler(obj: { name: string, value: string }) {
        switch (obj.name) {
            case 'email':
                setData(prev => ({ ...prev, email: obj.value }));
                break;
            case 'password':
                setData(prev => ({ ...prev, password: obj.value }));
                break;
            default:
                return null;
        }
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('login')}
                </h1>
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6'>
                    <FormInput
                        value={data.email}
                        change={onchangeHandler}
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type='email'
                    />
                    <FormInput
                        value={data.password}
                        change={onchangeHandler}
                        label={t('password')}
                        placeholder={t('password')}
                        name="password"
                        type="password"
                        reset={true}
                    />
                    <FormButton>
                        {t('login')}
                    </FormButton>
                </form>
                <div className='text-center mt-8 flex gap-2 justify-center'>
                    <span>{t('new_customer')}</span>
                    <Link href="/account/register" className='hover:text-silver transition-all'>
                        {t('register')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;