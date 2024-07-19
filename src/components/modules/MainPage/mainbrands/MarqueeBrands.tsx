'use client'
import * as React from 'react';
import { useState } from 'react';
import MarqueeBrandItem from './MarqueeBrandItem';

function MarqueeBrands() {
    const [isPaused, setIsPaused] = useState(false);

    function mouseEnterHandler() {
        setIsPaused(true);
    }

    function mouseLeaveHandler() {
        setIsPaused(false);
    }

    return (
        <div className='overflow-hidden marquee py-4 bg-gray-light flex items-center' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <MarqueeBrandItem
                isPaused={isPaused}
            />
            <MarqueeBrandItem
                isPaused={isPaused}
            />
            <MarqueeBrandItem
                isPaused={isPaused}
            />
            <MarqueeBrandItem
                isPaused={isPaused}
            />
            <MarqueeBrandItem
                isPaused={isPaused}
            />
            <MarqueeBrandItem
                isPaused={isPaused}
            />
        </div>
    );
}

export default MarqueeBrands;