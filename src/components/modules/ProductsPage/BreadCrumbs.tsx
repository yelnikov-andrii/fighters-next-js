'use client'
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useSelector } from 'react-redux';

function BreadCrumbs() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const subsubcategory = searchParams.get('subsubcategory');
    let url = `/products?`;
    let currentPageName = '';
    const { categories, subcategories } = useSelector((state: RootState) => state.categories);

    if (category) {
        url += `category=${category}`;
        const decodedCategory = category.replace(/-and-/g, ' & ').replace(/-/g, ' ');
        currentPageName += decodedCategory;
    }

    if (subcategory) {
        url += `subcategory=${subcategory}`;
        const decodedSubcategory = subcategory.replace(/-and-/g, ' & ').replace(/-/g, ' ');
        currentPageName += decodedSubcategory;
    }

    if (subsubcategory) {
        url += `subsubcategory=${subsubcategory}`;
        const decodedSubsubcategory = subsubcategory.replace(/-and-/g, ' & ').replace(/-/g, ' ');
        currentPageName += decodedSubsubcategory;
    }

    return (
        <div className='flex gap-2 items-center mb-4 md:mb-16'>
            <Link href="/" className='text-sm'>
                Home
            </Link>
            <svg style={{width: '14px', height: '14px'}} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
            <Link href={url} className='text-sm'>
                {currentPageName}
            </Link>
        </div>
    );
}

export default BreadCrumbs;