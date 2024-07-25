import { useTranslations } from 'next-intl';
import * as React from 'react';

function LastMarqueeItem() {
    const t = useTranslations('common');

    return (
        <div className='flex gap-2 md:gap-4 justify-around items-center min-w-fit px-2 md:px-4 marquee-item font-osvald font-bold uppercase'>
            <p className="text-3xl md:text-5xl">
                {t("new_just_dropped")}
            </p>
        </div>
    );
}

export default LastMarqueeItem;