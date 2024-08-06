'use client'
import * as React from 'react';
import BreadCrumbs from './BreadCrumbs';
import { useTranslations } from 'next-intl';
import { AllArticlesI } from '@/types/faq';
import Categories from './Categories';
import Subcategories from './Subcategories';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
    category: AllArticlesI;
    name: string;
}

function MainSubArticles(props: Props) {
    const t = useTranslations('common');
    const { category, name } = props;
    const { language } = useSelector((state: RootState) => state.language);

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
                        },
                        {
                            title: language === 'EN' ? category.name_en : category.name_ukr,
                            url: `${category.link}`

                        }
                    ]}
                />
                <h2 className='text-3xl mb-4 font-osvald'>
                    {language === 'EN' ? category.name_en : category.name_ukr}
                </h2>
                <p className='mb-4 font-osvald'>
                    {language === 'EN' ? category.description_en : category.description_ukr}
                </p>
                <Subcategories
                    articles={category.articles}
                    article_name={name}
                />
            </div>
        </section>
    );
}

export default MainSubArticles;