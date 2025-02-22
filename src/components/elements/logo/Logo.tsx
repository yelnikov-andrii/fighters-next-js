import * as React from 'react';
import MemoizedLink from '../memoizedLink/MemoizedLink';

function Logo() {
    return (
        <MemoizedLink href="/" className='md:order-1 font-bold grow-[1] font-osvald text-3xl'>
            Fighters
        </MemoizedLink>
    );
}

export default Logo;