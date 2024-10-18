'use client'
import FormButton from '@/components/elements/form-button/FormButton';
import FormInput from '@/components/elements/input/FormInput';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useState } from 'react';

function ContactUs() {
    const t = useTranslations('common');
    const [data, setData] = useState({
        fullname: '',
        email: '',
        message: ''
    });

    function onchangeHandler(obj: { name: string, value: string }) {
        switch (obj.name) {
            case 'email':
                setData(prev => ({ ...prev, email: obj.value }));
                break;
            case 'fullname':
                setData(prev => ({ ...prev, fullname: obj.value }));
                break;
            case 'message':
                setData(prev => ({ ...prev, message: obj.value }));
                break;
            default:
                return null;
        }
    }

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className='text-4xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('contact')}
                </h1>
                <p className='max-w-[800px] mx-auto'>
                    {t('contact_description')}
                </p>
                <strong className='block max-w-[800px] mx-auto my-8 text-xl'>
                    {t('contact_us')}
                </strong>
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6'>
                    <FormInput
                        label={t('full_name')}
                        placeholder={t('full_name')}
                        value={data.fullname}
                        change={onchangeHandler}
                        name='fullname'
                        type='text'
                    />
                    <FormInput
                        label='Email'
                        placeholder='Email'
                        value={data.email}
                        change={onchangeHandler}
                        name='email'
                        type='text'
                    />
                    <textarea
                        value={data.message}
                        onChange={(e) => {
                            onchangeHandler({ value: e.target.value, name: 'message' })
                        }}
                        name='message'
                        placeholder={t('write_message')}
                        className='border border-input-border py-2 px-4 rounded-sm transition-all w-full'
                        rows={5}
                    >
                    </textarea>
                    <FormButton type='submit'>
                        {t('send')}
                    </FormButton>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;