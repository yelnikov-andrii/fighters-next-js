'use client'
import { useState } from "react";
import MarqueeItem from "./MarqueeItem";

function MarqueeSignUp() {
    const [isPaused, setIsPaused] = useState(false);

    function mouseEnterHandler() {
        setIsPaused(true);
    }

    function mouseLeaveHandler() {
        setIsPaused(false);
    }

    return (
        <div
            className='overflow-hidden marquee py-1 md:py-2 bg-green flex items-center'
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <MarqueeItem isPaused={isPaused} />
            <MarqueeItem isPaused={isPaused} />
            <MarqueeItem isPaused={isPaused} />
            <MarqueeItem isPaused={isPaused} />
            <MarqueeItem isPaused={isPaused} />
        </div>
    );
}

export default MarqueeSignUp;