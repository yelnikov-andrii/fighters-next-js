import React, { Dispatch, SetStateAction } from 'react';
import styles from './pagination.module.scss';

interface Props {
  countOfProducts: number;
  setPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export const Pagination: React.FC <Props> = ({ countOfProducts, setPage, currentPage }) => {
  const limit = 9;
  const countOfPages = Math.ceil(countOfProducts / limit);

  const pages = [];

  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.pagination__list}>
        {pages.length > 1 && pages.map(page => (
          <div
            className={currentPage === page ? styles.pagination__page + ' ' + styles['pagination__page--current'] : styles.pagination__page} 
            onClick={() => {
              setPage(page);
            }}
            key={page}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};
