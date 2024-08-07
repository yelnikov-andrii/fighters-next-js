import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';

interface Props {
    links: any;
}

function Breadcrumbs(props: Props) {
    const { links } = props;
    const t = useTranslations('common');

    return (
        <div className='flex gap-2 items-center mb-8'>
            {links.map((link: any, index: number) => (
                <React.Fragment key={link.name ? link.name : link.title}>
                    <Link href={link.url}>
                        {link.name ? t(link.name) : link.title}
                    </Link>
                    {index !== links.length - 1 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg"><path d="M9.29006 15.8805L13.1701 12.0005L9.29006 8.12047C8.90006 7.73047 8.90006 7.10047 9.29006 6.71047C9.68006 6.32047 10.3101 6.32047 10.7001 6.71047L15.2901 11.3005C15.6801 11.6905 15.6801 12.3205 15.2901 12.7105L10.7001 17.3005C10.3101 17.6905 9.68006 17.6905 9.29006 17.3005C8.91006 16.9105 8.90006 16.2705 9.29006 15.8805Z"></path></svg>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Breadcrumbs;