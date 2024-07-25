'use client'
import * as React from 'react';
import MarqueeItem from './MarqueeItem';
import { useState } from 'react';

function ReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  function mouseEnterHandler() {
    setIsPaused(true);
  }

  function mouseLeaveHandler() {
    setIsPaused(false);
  }

  return (
    <div className='overflow-hidden marquee py-1 md:py-4 bg-black flex items-center mb-8 md:mb-16' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
      <MarqueeItem
        isPaused={isPaused}
      />
    </div>
  );
}

export default ReviewsMarquee;