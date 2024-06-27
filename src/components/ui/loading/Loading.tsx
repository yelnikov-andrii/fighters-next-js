'use client';
import React from 'react';
import styles from './loading.module.scss';

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.loading__spinner}>
    </div>
  </div>
);

export default Loading;