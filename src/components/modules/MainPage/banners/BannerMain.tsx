import * as React from 'react';
// images 
import venumBanner from '@/images/venum.jpg';
import venumBannerSmall from '@/images/banner-main-sm.jpg';
// next
import { unstable_getImgProps as getImgProps } from 'next/image'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LinkButton from '@/components/elements/link-button/LinkButton';

function BannerMain() {
    const { props: { srcSet: small } } = getImgProps({ alt: "Venum banner", src: venumBannerSmall })
    const { props: { srcSet: big, ...rest } } = getImgProps({ alt: "Venum banner", src: venumBanner });
    
    const t = useTranslations("common");

    return (
        <section className="max-h-screen w-full relative">
            <picture className='block h-screen md:h-auto'>
                <source media="(max-width: 768px)" srcSet={small} />
                <source media="(min-width: 768px)" srcSet={big} />
                <img {...rest} className='h-screen object-cover'/>
            </picture>
            <div className='container'>
                <div className='absolute top-[65%] md:top-[60%] lg:top-[60%] xl:top-[65%] [2xl]:top-[70%] pl-6'>
                    <h1 className="text-5xl font-osvald text-white uppercase" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                        Venum
                    </h1>
                    <p className='text-white mb-4' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                        {t("latest_venum_collection")}
                    </p>
                    <LinkButton url={`/products?brands=Venum`}>
                        {t("shop_all_venum")}
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}

export default BannerMain;