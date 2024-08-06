import * as React from 'react';
import Topblock from "./TopBlock";
import BottomBlock from './BottomBlock';

function Footer() {
    return (
        <footer className="bg-gray py-8">
            <div className='container'>
                <Topblock />
                <div className='w-full h-[1px] bg-silver my-6'></div>
                <BottomBlock />
            </div>
        </footer>
    );
}

export default Footer;