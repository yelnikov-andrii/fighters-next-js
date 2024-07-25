import { useTranslations } from 'next-intl';
import React from 'react';

interface PropsLink {
    name: string;
    url: string;
}

const Link = (props: PropsLink) => {
    const { name, url } = props;

    return (
        <li>
            <span>{name}: </span>
            <a
                className='underline transition-opacity hover:opacity-30'
                href={url}
                target='_blank'>
                {url}
            </a>
        </li>
    )
}

const Accessibility = () => {
    const t = useTranslations('common');

    const browsers = [
        {
            name: 'Mozilla FireFox',
            url: 'https://www.mozilla.org'
        },
        {
            name: 'Google Chrome',
            url: 'https://www.google.com/chrome/'
        },
        {
            name: 'Apple Safari',
            url: 'https://www.apple.com/uk/safari/'
        },
        {
            name: 'Microsoft Edge',
            url: 'https://www.microsoft.com'
        }
    ]

    return (
        <div className='container'>
            <section className='pt-12 pb-20'>
                <h1 className='text-5xl font-bold font-osvald text-center uppercase mb-8'>
                    {t('accessibility')}
                </h1>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center max-w-[800px]'>
                        {t('accesibility_offer_best')}
                    </p>
                    <br />
                    <p className='text-center max-w-[800px]'>
                        {t('accessibility_latest_borwser_tech')}
                    </p>
                </div>
                <div className='flex justify-center flex-col items-center mt-2'>
                    <ul className='flex flex-col gap-2 items-center mb-8'>
                        {browsers.map((browser: PropsLink) => (
                            <Link
                                name={browser.name}
                                url={browser.url}
                            />
                        ))}
                    </ul>
                    <p>
                        {t('accessibility_if_errors_contact')}
                    </p>
                </div>

            </section>
        </div>
    )
}

export default Accessibility;
