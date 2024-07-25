import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

function MarqueeItem(props: { isPaused: boolean, images: {src: string, alt: string}[], href: string, h2: string, p: string, direct: boolean }) {
    const { isPaused, images, href, h2, p, direct } = props;
    
    return (
        <div className='flex gap-2 md:gap-4 justify-around items-center min-w-fit px-4'>
            <div
                className={clsx("whitespace-nowrap marquee-item flex gap-4 md:gap-8 items-center", {
                    'marquee-item marquee-item--paused': isPaused,
                    'marquee-item marquee-item--direct': direct,
                })}
            >
                <Link href={href}>
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        width={56}
                        height={56}
                        sizes="(max-width: 768px) 50vw, 100vw"
                        className='min-w-[30px] min-h-[30px] md:min-w-[56px] md:min-h-[56px] transform hover:scale-105 transition-transform'

                    />
                </Link>
                <Link href={href}>
                    <h2 className='font-bold font-osvald text-3xl md:text-5xl uppercase hover:opacity-70 transition-opacity'>
                        {h2}
                    </h2>
                </Link>
                <Link href={href}>
                    <Image
                        src={images[1].src}
                        alt={images[1].alt}
                        width={56}
                        height={56}
                        sizes="(max-width: 768px) 50vw, 100vw"
                        className='min-w-[30px] min-h-[30px] md:min-w-[56px] md:min-h-[56px] transform hover:scale-105 transition-transform'
                    />
                </Link>
                <Link href={href}>
                    <p className='font-bold font-osvald text-lg md:text-xl uppercase hover:opacity-70 transition-opacity'>
                        {p}
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default MarqueeItem;