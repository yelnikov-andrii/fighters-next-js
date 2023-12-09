import React from 'react';
import { LatestArrivalsItem } from './LatestArrivalsItem';
import getLatestProducts from '@/app/lib/getLatestProducts';
import { LatestTitle } from './LatestTitle';
import styles from './latest.module.scss';
import { ProductInt } from '@/types/products';
import { ReduxWrapper } from '../../reduxWrapper/Wrapper';

async function LatestArrivals () {
  const latestProducts = await getLatestProducts();

  return (
    <div className={styles.latest}>
      <ReduxWrapper>
        <LatestTitle />
      </ReduxWrapper>
      <div className={styles.latest__block}>
        {latestProducts.length && latestProducts?.map((product: ProductInt) => (
          <ReduxWrapper key={product.id}>
            <LatestArrivalsItem
              product={product}
            />
          </ReduxWrapper>
        ))}
      </div>
    </div>
  );
};

export default LatestArrivals;