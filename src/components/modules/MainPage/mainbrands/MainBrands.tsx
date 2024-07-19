import * as React from 'react';
import MarqueeBrands from "./MarqueeBrands";
import getBrands from '@/app/lib/getBrands';
import Brands from './Brands';

async function MainBrands() {
    const brands = await getBrands();
    return ( 
        <section>
            <MarqueeBrands />
            <Brands 
              brands={brands}
            />
        </section>
     );
}

export default MainBrands;