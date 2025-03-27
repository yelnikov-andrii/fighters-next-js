
import * as React from 'react';
import ArticleLink from './ArticleLink';

interface Props {
    articles: ArticleI[];
    article_name: string;
}

function Subcategories(props: Props) {
    const { articles, article_name } = props;
    return (
        <div className='flex flex-wrap gap-[8px] md:gap-[16px]'>
            {articles.map(article => (
                <ArticleLink
                    article={article}
                    name={article_name}
                    key={article.id}
                />
            ))}
        </div>
    );
}

export default Subcategories;