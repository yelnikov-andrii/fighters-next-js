import LinkButton from '@/components/elements/LinkButton';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';

function MarqueeBrandItem(props: { isPaused: boolean }) {
    const { isPaused } = props;
    const t = useTranslations('common');

    return (
        <div className='flex gap-2 md:gap-4 justify-around items-center min-w-fit px-2 md:px-4'>
            <div
                className={clsx("whitespace-nowrap marquee-item flex gap-8 items-center", {
                    'marquee-item marquee-item--paused': isPaused,
                    'marquee-item marquee-item--direct': true,
                })}
            >
                <h2 className='font-bold font-osvald text-3xl md:text-5xl uppercase hover:opacity-70 transition-opacity'>
                    {t("premium_brands")}
                </h2>
                <LinkButton
                    url="/brands"
                    style={{ border: '1px solid black', borderRadius: '4px', minWidth: '130px', display: 'flex', justifyContent: 'center' }}
                >
                    {t('view_all_brands')}
                </LinkButton>
            </div>
        </div>
    );
}

export default MarqueeBrandItem;