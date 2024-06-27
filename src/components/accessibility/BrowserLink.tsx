import React from 'react';
import styles from './accessibility.module.scss';

export const BrowserLink: React.FC <any> = ({ name, url }) => {
  return (
    <div className={styles.accessibility__blocklink}>
      <p className={styles.accessibility__name}>
        {name}
      </p>
      <a 
        href={url} 
        target='_blank'
        className={styles.accessibility__link}
      >
        {url}
      </a>
    </div>
  )
}
