import Button from '@/components/elements/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import * as React from 'react';

function BannerSecond() {
    const t = useTranslations('common')
    return (
        <section className="max-h-screen h-screen min-h-[50%] w-full relative">
            <Image
                src="/no-gi-banner.png"
                alt='No gi banner'
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw"
                quality={100}
                className='absolute top-0 left-0 right-0 bottom-0 object-cover'
            />
            <div className='absolute top-[60%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
                <h2 className="text-5xl font-osvald font-bold text-white uppercase" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                    {t("get_no_gi")}
                </h2>
                <p className='text-white' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                    {t("latest_rashguards")}
                </p>
                <div className='flex gap-8 items-center mt-4'>
                    <Button url={`/products?subsubcategory=21`}>
                        {t("shop_fight_shorts")}
                    </Button>
                    <Button url="/products?subsubcategory=20">
                        {t("shop_all_rashguards")}
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default BannerSecond;