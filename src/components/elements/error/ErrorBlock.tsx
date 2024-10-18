import React from 'react'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import FormButton from '../form-button/FormButton';

export const ErrorBlock = () => {
  const t = useTranslations('common');

  return (
    <div className='container'>
      <div className="py-20">
        <p className='text-5xl text-center font-bold'>
          404
        </p>
        <h1 className='font-bold text-3xl text-center uppercase'>
          {t("not_found_page")}
        </h1>
        <div className='flex justify-center items-center text-center mt-4'>
          <div className='max-w-[240px]'>
            <FormButton type='button'>
              <Link
                className="h-6 w-full flex cursor-pointer text-black border-none outline-none px-2 py-4 justify-center items-center"
                href="/"
              >
                {t('back_to_home')}
              </Link>
            </FormButton>
          </div>
        </div>
      </div>
    </div>
  )
}
