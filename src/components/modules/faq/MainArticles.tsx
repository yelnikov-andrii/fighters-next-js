import { useTranslations } from 'next-intl';
import * as React from 'react';
import BreadCrumbs from './BreadCrumbs';

function MainArticles() {
    const t = useTranslations('common');
    return (
        <section className="py-10">
            <div className="container">
                <BreadCrumbs 
                  links={[
                    {
                        name: 'home',
                        url: '/help-and-faq'
                    },
                    {
                        name: 'all_articles',
                        url: '/help-and-faq/articles'
                    }
                  ]}
                />
                <h2 className='text-2xl mb-4 font-osvald'>
                    {t('all_articles')}
                </h2>
            </div>
        </section>
    );
}

export default MainArticles;