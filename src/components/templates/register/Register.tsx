'use client'
import * as React from 'react';
import { useTranslations } from 'next-intl';
import FormInput from '@/components/elements/input/FormInput';
import { useState } from 'react';
import FormButton from '@/components/elements/form-button/FormButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

function Register() {
    const router = useRouter();
    const t = useTranslations('common');
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [alert, setAlert] = useState({ success: '', failed: '' });

    function onchangeHandler(obj: { name: string, value: string }) {
        switch (obj.name) {
            case 'firstName':
                setData(prev => ({ ...prev, firstName: obj.value }));
                break;
            case 'lastName':
                setData(prev => ({ ...prev, lastName: obj.value }));
                break;
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

    async function handleSubmit(e: any) {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name: data?.firstName, lastName: data?.lastName, password: data?.password, email: data?.email })
        });

        if (response.ok) {
            setAlert(obj => ({ ...obj, success: t('success_reg') }));
            clearFields();
            setTimeout(() => {
                setAlert(obj => ({ ...obj, success: '' }));
                router.push("/account/login");
            }, 2500);
        } else {
            const data = await response.json();
            const error = data.message || t('failed_reg');
            setAlert(obj => ({ ...obj, failed: error }));
            setTimeout(() => {
                setAlert(obj => ({ ...obj, failed: '' }));
            }, 2500)
        }
    }

    function clearFields() {
        setData(obj => ({...obj, firstName: '',
            lastName: '',
            email: '',
            password: ''
        }))
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('register')}
                </h1>
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6' onSubmit={handleSubmit}>
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
                    <FormButton type='submit'>
                        {t('register')}
                    </FormButton>
                </form>
                <div className='text-center mt-8 flex gap-2 justify-center'>
                    <span>{t('already_have_account')}</span>
                    <Link href="/account/login" className='hover:text-silver transition-all'>
                        {t('login')}
                    </Link>
                </div>
                {alert.success && (
                    <div className='py-4 px-2 text-green font-bold border-2 border-green rounded-lg flex justify-center items-center mt-2 max-w-[400px] mx-auto'>
                        {alert?.success}
                    </div>
                )}
                {alert.failed && (
                    <div className='py-4 px-2 text-red font-bold border-2 border-red rounded-lg flex justify-center items-center mt-2 max-w-[400px] mx-auto'>
                        {alert?.failed}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Register;