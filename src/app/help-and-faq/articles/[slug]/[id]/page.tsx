import MainArticle from '@/components/modules/faq/MainArticle';
import { allArticles } from '@/data/faq';
import * as React from 'react';

function page({ params }: any) {
    const foundArticle: any = allArticles.find(article => {
        const arr = article.link.split('/');
        if (arr[arr.length - 1] === params?.slug) {
            return article;
        }
    });
    const article = foundArticle?.articles.find((a: any) => a.id === +params?.id);

    return (
        <MainArticle
            article={article}
            foundArticle={foundArticle}
        />
    );
}

export default page;