'use client'
import React, { useState } from 'react';
import MarqueeItem from './MarqueeItem';

function Marquee(props: { images: { src: string, alt: string }[], h2: string, p: string, href: string, direct: boolean }) {
  const [isPaused, setIsPaused] = useState(false);

  function mouseEnterHandler() {
    setIsPaused(true);
  }

  function mouseLeaveHandler() {
    setIsPaused(false);
  }

  return (
    <div
      className='overflow-hidden marquee py-2 md:py-4 bg-gray-light flex items-center'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
      <MarqueeItem
        {...props}
        isPaused={isPaused}
      />
    </div>
  );
};

export default Marquee;