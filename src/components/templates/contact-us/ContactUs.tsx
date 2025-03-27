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
    const [errors, setErrors] = useState<{ fullname?: string; email?: string; message?: string }>({});
    const [alert, setAlert] = useState('');
    const [loading, setLoading] = useState(false);

    function onchangeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setErrors({});
        const { name, value } = event.target;
        setData(data => ({ ...data, [name]: value }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        setAlert('');
        if (validateForm()) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        fullName: data.fullname,
                        message: data.message,
                        email: data.email
                    }),
                });

                if (response.ok) {
                    setData({ fullname: '', email: '', message: '' });
                    setAlert(t('we_will_contact'));

                    setTimeout(() => {
                        setAlert('');
                    }, 3000);
                } else {
                    console.error('Failed to submit contact form:', await response.text());
                }
            } catch (error) {
                console.error('Error submitting contact form:', error);
            }

            finally {
                setLoading(false);
            }
        }
    }

    function validateForm() {
        let newErrors: typeof errors = {};

        if (!data.fullname.trim()) newErrors.fullname = t('required');
        if (!data.email.trim()) {
            newErrors.email = t('required');
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = t('invalid_email');
        }
        if (!data.message.trim()) newErrors.message = t('required');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
                <form className='py-2 max-w-[400px] mx-auto flex flex-col gap-6' onSubmit={handleSubmit}>
                    <FormInput
                        label={t('full_name')}
                        placeholder={t('full_name')}
                        value={data.fullname}
                        change={onchangeHandler}
                        name='fullname'
                        type='text'
                    />
                    {errors.fullname && <span className="text-red">{errors.fullname}</span>}
                    <FormInput
                        label='Email'
                        placeholder='Email'
                        value={data.email}
                        change={onchangeHandler}
                        name='email'
                        type='email'
                    />
                    {errors.email && <span className="text-red">{errors.email}</span>}
                    <textarea
                        value={data.message}
                        onChange={onchangeHandler}
                        name='message'
                        placeholder={t('write_message')}
                        className='border border-input-border py-2 px-4 rounded-sm transition-all w-full'
                        rows={5}
                    >
                    </textarea>
                    {errors.message && <span className="text-red">{errors.message}</span>}
                    <FormButton type='submit'>
                        {t('send')} {loading && (<span className='dots'></span>)}
                    </FormButton>
                    {alert && (
                        <div className={`max-w-[400px] mx-auto p-4 rounded-md text-white text-center bg-green`}>
                            {alert}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

export default ContactUs;