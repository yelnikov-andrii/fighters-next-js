import * as React from 'react';
import { allArticles } from '@/data/faq';
import ArticlesLink from './ArticlesLink';

function MainFAQ() {
    return ( 
        <div className='flex flex-wrap sm:gap-[8px] md:gap-[16px]'>
            {allArticles.map(article => (
                <ArticlesLink 
                  article={article}
                />
            ))}
        </div>
     );
}

export default MainFAQ;