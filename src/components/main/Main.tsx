import React from 'react'
import { BannerMain } from './BannerMain'
import LatestArrivals from './LatestArrivals';
import styles from './main.module.scss';
import { BannerSecond } from './BannerSecond';
import { ReduxWrapper } from '../reduxWrapper/Wrapper';
import { firstBlockElements, secondBlockElements } from '@/data/main';
import { AboutBlock } from './AboutBlock';

const Main = () => {
  return (
    <div>
      <div className={styles.sectionMain}>
        <BannerMain /> 
        <ReduxWrapper>
          <div className={styles.main__banners}>
            <BannerSecond 
              reverse={false}
              elements={firstBlockElements}
            />
            <BannerSecond 
              reverse={true}
              elements={secondBlockElements}
            />
          </div>
        </ReduxWrapper>
        <LatestArrivals />
        <ReduxWrapper>
          <AboutBlock />
        </ReduxWrapper>
      </div>
    </div>
  )
}

export default Main;
