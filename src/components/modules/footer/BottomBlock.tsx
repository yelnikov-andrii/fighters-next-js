import * as React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

function BottomBlock() {
    return (
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <CopyrightIcon
                    fontSize='small'
                />
                <p className='text-sm'>
                    2024 Fighters
                </p>
            </div>
            <ul className='flex gap-4 items-center text-sm'>
                <li>
                    <a
                        href='https://fumetsu.com/'
                        target='_blank'
                        className='hover:text-silver hover:underline transition-all'
                    >
                        Fumetsu
                    </a>
                </li>
                <li>
                    <a
                        href='https://bytomic.com/'
                        target='_blank'
                        className='hover:text-silver hover:underline transition-all'
                    >
                        Bytomic
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.venum.com'
                        target='_blank'
                        className='hover:text-silver hover:underline transition-all'
                    >
                        Venum
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.reebok.com'
                        target='_blank'
                        className='hover:text-silver hover:underline transition-all'
                    >
                        Reebok
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default BottomBlock;