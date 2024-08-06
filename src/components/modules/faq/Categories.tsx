import * as React from 'react';
import { allArticles } from "@/data/faq";
import ArticlesLink from './ArticlesLink';
import { AllArticlesI } from '@/types/faq';

interface Props {
    articles: AllArticlesI[];
}

function Categories(props: Props) {
    const { articles } = props;
    return (
        <div className='flex flex-wrap sm:gap-[8px] md:gap-[16px]'>
            {articles.map(article => (
                <ArticlesLink
                    article={article}
                />
            ))}
        </div>
    );
}

export default Categories;