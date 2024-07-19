'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useCallback } from 'react';

function Pagination({ countOfProducts }: { countOfProducts: number }) {
    const limit = 9;
    const countOfPages = Math.ceil(countOfProducts / limit);
    const searchParams = useSearchParams();

    const pages = [];

    for (let i = 1; i <= countOfPages; i++) {
        pages.push(i);
    }

    const currentPage = searchParams.get('page') || 1;

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString();
        },
        [searchParams]
    );

    return (
        <div>
            <div className='flex gap-2 mt-8 justify-center'>
                {pages.length > 1 && pages.map(page => (
                    <Link
                        href={`?${createQueryString('page', page.toString())}`}
                        // className={+currentPage === page ? styles.pagination__page + ' ' + styles['pagination__page--current'] : styles.pagination__page}
                        className={clsx('w-[40px] h-[40px] rounded-sm font-medium p-2 flex justify-center items-center', {
                           'border font-bold': +currentPage === page 
                        })}
                        key={page}
                    >
                        {page}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Pagination;