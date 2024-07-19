import * as React from 'react';
import Link from "next/link";

function Button({children, url, style}: {children: React.ReactNode, url: string, style?: any}) {
    return ( 
        <Link href={url} className='button' style={style}>
          {children}
        </Link>
     );
}

export default Button;