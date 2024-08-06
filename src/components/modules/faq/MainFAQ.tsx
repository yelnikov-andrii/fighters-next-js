import * as React from 'react';
import { allArticles } from '@/data/faq';
import ArticlesLink from './ArticlesLink';
import Categories from './Categories';

function MainFAQ() {
    return ( 
        <>
          <Categories 
            articles={allArticles}
          />
        </>
     );
}

export default MainFAQ;