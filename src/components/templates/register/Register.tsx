'use client'
import * as React from 'react';
import { useTranslations } from 'next-intl';
import FormInput from '@/components/elements/input/FormInput';
import { useState } from 'react';
import FormButton from '@/components/elements/FormButton';
import Link from 'next/link';

function Register() {
    const t = useTranslations('common');
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    function emailChangeHandler(value: string) {
        setData(prev => ({ ...prev, email: value }))
    }

    function firstNameChangeHandler(value: string) {
        setData(prev => ({ ...prev, firstName: value }))
    }

    function onchangeHandler(obj: { name: string, value: string }) {
        switch (obj.name) {
            case 'firstName':
                setData(prev => ({ ...prev, firstName: obj.value }));
                break;
            case 'lastName':
                setData(prev => ({ ...prev, lastName: obj.value }));
                break;
            default:
                return null;
        }
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('register')}
                </h1>
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6'>
                    <FormInput
                        value={data.firstName}
                        change={onchangeHandler}
                        label={t('first_name')}
                        placeholder={t('first_name')}
                        name="firstName"
                        type="text"
                    />
                    <FormInput
                        value={data.lastName}
                        change={onchangeHandler}
                        label={t('last_name')}
                        placeholder={t('last_name')}
                        name="lastName"
                        type="text"
                    />
                    <FormInput
                        value={data.email}
                        change={onchangeHandler}
                        label='Email'
                        placeholder='Email'
                        name="email"
                        type="email"
                    />
                    <FormInput
                        value={data.password}
                        change={onchangeHandler}
                        label={t('password')}
                        placeholder={t('password')}
                        name="password"
                        type="password"
                    />
                    <FormButton>
                        {t('register')}
                    </FormButton>
                </form>
                <div className='text-center mt-8 flex gap-2 justify-center'>
                    <span>{t('already_have_account')}</span>
                    <Link href="/account/login" className='hover:text-silver transition-all'>
                      {t('login')}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Register;