import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';
import LinkButton from '../LinkButton';

interface Props {
    isPaused: boolean;
}

function MarqueeItem({ isPaused }: Props) {
    const t = useTranslations('common');

    return (
        <div
            className={clsx("flex gap-2 md:gap-4 justify-around items-center min-w-fit px-4 marquee-item font-osvald font-bold uppercase", {
                'marquee-item marquee-item--paused': isPaused,
                'marquee-item marquee-item--direct': true,
            })}
        >
            <Link className="sm:text-xl md:text-3xl hover:opacity-70" href="/sign-up">
                {t("sign_up_and_get_free")}
            </Link>
            <LinkButton
                url="/sign-up"
                style={{ borderRadius: '2px', minWidth: '130px', height: '30px', padding: '5px 10px', display: 'flex', justifyContent: 'center', color: 'white', background: 'black' }}
                isDark={true}
            >
                {t('get_ten_off')}
            </LinkButton>
        </div>
    );
}

export default MarqueeItem;