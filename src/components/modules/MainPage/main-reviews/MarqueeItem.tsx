import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import * as React from 'react';

function MarqueeItem({isPaused}: {isPaused: boolean}) {
    const t = useTranslations('common');

    return ( 
            <div className='flex gap-4 justify-around items-center min-w-fit px-4'>
            <div
                className={clsx("whitespace-nowrap marquee-item flex text-white text-4xl font-osvald gap-8 items-center", {
                    'marquee-item marquee-item--paused': isPaused,
                    'marquee-item marquee-item--direct': true,
                })}
            >
                FIGHTERS: {t('ranked_by_you')}
            </div>
        </div>
     );
}

export default MarqueeItem;