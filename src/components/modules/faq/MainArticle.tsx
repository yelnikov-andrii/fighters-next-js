'use client'
import * as React from 'react';
import BreadCrumbs from './BreadCrumbs';
import { useTranslations } from 'next-intl';
import { AllArticlesI, ArticleI } from '@/types/faq';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
    article: ArticleI;
    foundArticle: AllArticlesI;
}

function MainArticle(props: Props) {
    const t = useTranslations('common');
    const { article, foundArticle } = props;
    const { language } = useSelector((state: RootState) => state.language);

    return (
        <section className="py-24">
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
                            title: language === 'EN' ? foundArticle?.name_en : foundArticle?.name_ukr,
                            url: `${foundArticle?.link}`
                        },
                    ]}
                />
                <div className='flex justify-center flex-col items-center gap-4 mt-24 p-10 shadow-xl'>
                    <h2 className='text-3xl mb-4 font-osvald'>
                        {language === 'EN' ? article?.name_en : article?.name_ukr}
                    </h2>
                    <p className='mb-4 font-osvald'>
                        {language === 'EN' ? article?.answer_en : article?.answer_ukr}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MainArticle;