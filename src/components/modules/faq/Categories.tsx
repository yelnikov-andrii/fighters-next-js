import * as React from 'react';
import ArticlesLink from './ArticlesLink';

interface Props {
    articles: AllArticlesI[];
}

function Categories(props: Props) {
    const { articles } = props;
    return (
        <div className='flex flex-wrap gap-[8px] md:gap-[16px]'>
            {articles.map(article => (
                <ArticlesLink
                    article={article}
                    key={article.id}
                />
            ))}
        </div>
    );
}

export default Categories;