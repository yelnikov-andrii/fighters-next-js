'use client'
import { fetchAllSubcategories, fetchSubsubcategories } from '@/redux/action-creator/Categories/fetchCategories';
import { RootState } from '@/redux/store';
import { CategoryInt, SubsubcategoryInt } from '@/types/categories';
import { ProductInt } from '@/types/products';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    product: ProductInt;
}

function BreadCrumbs({ product }: Props) {
    let url = `/products?`;
    let currentPageName = '';
    const { categories, subcategories, allSubsubcategories, allSubcategories } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubsubcategories());
        dispatch(fetchAllSubcategories());
    }, []);

    const foundSubsubcategory = allSubsubcategories?.find((item: SubsubcategoryInt) => item.id === product.SubSubcategorySportId);
    const foundSubcategory = allSubcategories?.find((item: any) => item.id === foundSubsubcategory?.SubcategorySportId);
    const foundCategory = categories.find((item: CategoryInt) => item.id === foundSubcategory?.CategorySportId);

    return (
        <div className='flex gap-2 items-center mb-4 md:mb-8'>
            <Link href="/" className='text-sm'>
                Home
            </Link>
            {foundCategory && foundSubcategory && foundSubsubcategory && (
                <>
                    <svg style={{ width: '14px', height: '14px' }} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
                    <Link href={`/products?category=${foundCategory?.name_en}`} className='text-sm'>
                        {foundCategory?.name_en}
                    </Link>
                    <svg style={{ width: '14px', height: '14px' }} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
                    <Link href={`/products?subcategory=${foundSubcategory?.name_en}`} className='text-sm'>
                        {foundSubcategory?.name_en}
                    </Link>
                    <svg style={{ width: '14px', height: '14px' }} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="m9.693 4.5 7.5 7.5-7.5 7.5" stroke="currentColor" strokeWidth="1.5" fill="none"></path></svg>
                    <Link href={`/products?subsubcategory=${foundSubsubcategory?.name_en}`} className='text-sm'>
                        {foundSubsubcategory?.name_en}
                    </Link>
                </>
            )}
        </div>
    );
}

export default BreadCrumbs;