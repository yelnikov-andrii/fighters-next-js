// import { Products } from '@/components/products/Products'
import Products from '@/components/templates/products/Products';
import { ReduxWrapper } from '@/components/reduxWrapper/Wrapper'
import React from 'react'
import { getProducts } from '../lib/getProducts';
import { Pagination } from '@/components/products/pagination/Pagination';

export default async function Page(params: any) {
    const searchParams = params.searchParams;
    const data = await getProducts(searchParams);

    return (
        <Products
            data={data}
        />
    )
}

// async function getProducts(params: any) {
//     const page = params.page || '1';
//     const limit = params.limit || '9';

//     if (params) {
//         const obj = Object.entries(params);
//         let str = obj.reduce((init, el, index, arr) => {
//             if (arr.length - 1 !== index) {
//                 return init + el[0] + '=' + el[1] + '&';
//             } else {
//                 return init + el[0] + '=' + el[1];
//             }
//         }, '');
//         str += `&page=${page}&limit=${limit}`;
//         const response = await fetch('http://localhost:3000/api/products?' + str);
//         const data = await response.json();
//         return data;
//     }

//     const response = await fetch('http://localhost:3000/api/products');
//     const data = await response.json();
//     return data;
// }
