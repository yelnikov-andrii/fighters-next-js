import * as React from 'react';
import List from '@/components/modules/ProductsPage/List';
import Link from 'next/link';
import BreadCrumbs from '@/components/modules/ProductsPage/BreadCrumbs';
import Toolbar from '@/components/modules/ProductsPage/Toolbar';

function Products({ data }: { data: any }) {
    return (
        <main className='py-8'>
            <div className='container'>
                <BreadCrumbs />
                <Toolbar />
                <div>
                    <List
                        data={data}
                    />
                </div>
            </div>
        </main>
    );
}

export default Products;