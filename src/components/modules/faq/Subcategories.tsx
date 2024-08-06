
import * as React from 'react';
import { ArticleI } from '@/types/faq';
import ArticleLink from './ArticleLink';

interface Props {
    articles: ArticleI[];
    article_name: string;
}

function Subcategories(props: Props) {
    const { articles, article_name } = props;
    return (
        <div className='flex flex-wrap sm:gap-[8px] md:gap-[16px]'>
            {articles.map(article => (
                <ArticleLink
                    article={article}
                    name={article_name}
                />
            ))}
        </div>
    );
}

export default Subcategories;