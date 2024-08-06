'use client'
import * as React from 'react';
import Link from 'next/link';
import { AllArticlesI, ArticleI } from '@/types/faq';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function ArticlesLink({ article, name }: { article: ArticleI, name: string }) {
    const { language } = useSelector((state: RootState) => state.language);

    return (
        <Link href={`/help-and-faq/articles/${name}/${article.id.toString()}`} className='w-full sm:w-calc-50-4 md:w-calc-33-16 border border-border-color rounded-lg hover:border-green-indigo transition-all font-osvald'>
            <div className='p-4'>
                <strong className='mb-2 block'>
                    {language === 'EN' ? article.name_en : article.name_ukr}
                </strong>
                <p className='text-gray-second mb-2'>
                    {language === 'EN' ? article.answer_en : article.answer_ukr}
                </p>
            </div>
        </Link>
    );
}

export default ArticlesLink;