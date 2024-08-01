'use client'
import * as React from 'react';

function BackBlock() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return ( 
        <div className="flex items-center justify-center">
            <button className='font-bold font-osvald' onClick={handleScrollToTop}>
                Back to top
            </button>
        </div>
    );
}

export default BackBlock;