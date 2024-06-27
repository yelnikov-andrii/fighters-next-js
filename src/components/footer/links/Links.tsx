import React from 'react';
import styles from './links.module.scss';
import { Block } from './Block';
import { info } from '@/data/footer';

export const Links = () => {
  return (
    <div className={styles.links}>
      {info.map(infoItem => (
        <Block 
          name_en={infoItem.name_en}
          name_ukr={infoItem.name_ukr}
          items={infoItem.items}
          key={infoItem.name_en}
        />
      ))}
    </div>
  )
}
