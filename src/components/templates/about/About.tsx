import { useTranslations } from 'next-intl';
import React from 'react'

const About = () => {
  const t = useTranslations('common');

  return (
    <div className='container'>
      <section className='pt-12 pb-20'>
        <h1 className='text-5xl font-bold font-osvald text-center uppercase mb-8'>
          {t('about')}
        </h1>
        <div className='flex justify-center flex-col items-center'>
          <p className='text-center max-w-[800px]'>
            {t('about_description')}
          </p>
          <br />
          <p className='text-center max-w-[800px]'>
            {t('about_description2')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default About;
