import * as React from 'react';
import Link from "next/link";

function Logo() {
    return (
        <Link href="/" className='md:order-1 font-bold grow-[1] font-osvald text-3xl'>
            Fighters
        </Link>
    );
}

export default Logo;