import { baseUrl } from '@/data/url';
import { BrandI } from '@/types/main';
import axios from 'axios';
import * as React from 'react';

async function ListBrands() {
    const response = await axios.get(`${baseUrl}/brands`);
    console.log(response, 'response');
    const brands: any = [];
    return (
        <div>
            {brands?.map((brand: BrandI) => (
                <div>
                    {brand.name}
                </div>
            ))}
        </div>
    );
}

export default ListBrands;