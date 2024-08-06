import { useTranslations } from 'next-intl';
import * as React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Categories from './Categories';
import { allArticles } from '@/data/faq';

function MainArticles() {
    const t = useTranslations('common');
    return (
        <section className="py-16">
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
                <h2 className='text-3xl mb-4 font-osvald'>
                    {t('all_articles')}
                </h2>
                <h3 className='mb-4 text-2xl font-osvald'>
                    {t('categories')}
                </h3>
                <Categories 
                  articles={allArticles}
                />
            </div>
        </section>
    );
}

export default MainArticles;