import * as React from 'react';
import { allArticles } from '@/data/faq';
import MainSubArticles from '@/components/modules/faq/MainSubArticles';

function page({ params }: { params: any }) {
    const { slug } = params;

    const foundArticle: any = allArticles.find(article => {
        const arr = article.link.split('/');
        if (arr[arr.length - 1] === slug) {
            return article;
        }
    });

    return (
        <MainSubArticles
            category={foundArticle}
            name={slug}
        />
    );
}

export default page;