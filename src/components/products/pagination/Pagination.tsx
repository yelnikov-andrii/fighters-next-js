'use client'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styles from './pagination.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Props {
  countOfProducts: number;
  // setPage: Dispatch<SetStateAction<number>>;
  // currentPage: number;
}

export const Pagination: React.FC<Props> = ({ countOfProducts }) => {
  const limit = 9;
  const countOfPages = Math.ceil(countOfProducts / limit);
  const router = useRouter();
  const pathname = usePathname();
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
      <div className={styles.pagination__list}>
        {pages.length > 1 && pages.map(page => (
          <Link
            href={`?${createQueryString('page', page.toString())}`}
            className={+currentPage === page ? styles.pagination__page + ' ' + styles['pagination__page--current'] : styles.pagination__page}
            key={page}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};
