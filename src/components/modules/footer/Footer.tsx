import * as React from 'react';
import Topblock from "./TopBlock";
import BottomBlock from './BottomBlock';

function Footer() {
    return (
        <footer className="bg-gray py-8">
            <div className='container'>
                <Topblock />
                <hr />
                <BottomBlock />
            </div>
        </footer>
    );
}

export default Footer;