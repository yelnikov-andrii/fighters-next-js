'use client'
import * as React from 'react';
import Link from 'next/link';
import { AllArticlesI } from '@/types/faq';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function ArticlesLink({ article }: { article: AllArticlesI }) {
    const { language } = useSelector((state: RootState) => state.language);

    return (
        <Link href={article.link} className='w-full sm:w-calc-50-4 md:w-calc-33-16 border border-border-color rounded-lg hover:border-green-indigo transition-all font-osvald'>
            <div className='p-4'>
                <strong className='mb-2 block'>
                    {language === 'EN' ? article.name_en : article.name_ukr}
                </strong>
                <p className='text-gray-second mb-2'>
                    {language === 'EN' ? article.description_en : article.description_ukr}
                </p>
                <p className='text-sm text-gray-second'>
                    {article.articles.length} {language === 'EN' ? 'artciles' : 'статей'}
                </p>
            </div>
        </Link>
    );
}

export default ArticlesLink;