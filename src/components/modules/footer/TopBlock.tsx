import Button from '@/components/elements/Button';
import Logo from '@/components/elements/Logo';
import { about, customerService, usefulLinks } from '@/data/footer';
import Link from 'next/link';
import * as React from 'react';

function Topblock() {
    return (
        <div className='flex flex-col md:flex-row gap-2 justify-between'>
            <div>
                <div>
                    <Logo />
                </div>
                <p className='max-w-[320px] my-4'>
                    Fighters is the premier retailer of boxing, martial arts and combat sports products. Est 2024.
                </p>
                <Button url='/about'>
                    About us
                </Button>
                <nav className='my-4'>
                    <ul className='flex gap-8 items-center'>
                        <li>
                            <a href='https://facebook.com' target='_blank'>
                                <svg className='hover:scale-125 transition-transform duration-500' width="24" height="24" viewBox="0 0 14222 14222" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111Zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28Zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137Zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013Z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://youtube.com' target='_blank'>
                                <svg className='hover:scale-125 transition-transform duration-500' width="24" height="17" viewBox="0 0 48 34" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="m19.044 23.27-.001-13.582 12.968 6.814-12.967 6.768ZM47.52 7.334s-.47-3.33-1.908-4.798C43.787.61 41.74.601 40.803.49 34.086 0 24.01 0 24.01 0h-.02S13.914 0 7.197.49c-.939.11-2.984.12-4.81 2.045C.947 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.906 4.798c1.827 1.926 4.226 1.866 5.294 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.984-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824Z"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href='https://instagram.com' target='_blank'>
                                <svg className='hover:scale-125 transition-transform duration-500' width="24" height="24" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><circle cx="15.238" cy="4.948" r="1.238"></circle><path d="M19.47 3.444A5.11 5.11 0 0 0 16.548.527a7.351 7.351 0 0 0-2.43-.466C13.05.014 12.713 0 9.999 0c-2.712 0-3.057 0-4.12.06A7.351 7.351 0 0 0 3.45.528 5.11 5.11 0 0 0 .528 3.444 7.317 7.317 0 0 0 .06 5.87C.014 6.936 0 7.274 0 9.982s0 3.053.06 4.113c.018.829.176 1.649.468 2.425a5.11 5.11 0 0 0 2.922 2.917 7.35 7.35 0 0 0 2.429.5c1.069.047 1.407.06 4.12.06s3.058 0 4.12-.06a7.351 7.351 0 0 0 2.429-.466 5.11 5.11 0 0 0 2.922-2.918 7.31 7.31 0 0 0 .467-2.424c.047-1.067.06-1.405.06-4.113s0-3.053-.06-4.113a7.317 7.317 0 0 0-.467-2.459zm-1.437 10.537a5.439 5.439 0 0 1-.34 1.843 3.262 3.262 0 0 1-1.87 1.87 5.451 5.451 0 0 1-1.825.34c-1.04.046-1.332.06-3.996.06-2.664 0-2.937 0-3.995-.06a5.451 5.451 0 0 1-1.825-.34 3.255 3.255 0 0 1-1.878-1.87 5.439 5.439 0 0 1-.34-1.823c-.046-1.038-.06-1.33-.06-3.992s0-2.934.06-3.992c.006-.63.121-1.253.34-1.844a3.255 3.255 0 0 1 1.878-1.87 5.451 5.451 0 0 1 1.825-.339c1.038-.046 1.331-.06 3.995-.06s2.937 0 3.996.06c.623.008 1.24.123 1.824.34.86.331 1.54 1.01 1.872 1.87.216.583.331 1.2.34 1.823.046 1.038.06 1.33.06 3.992 0 2.661 0 2.948-.047 3.992h-.014z"></path><path d="M9.991 14.753a4.761 4.761 0 1 1 0-9.523 4.761 4.761 0 0 1 0 9.523zm0-1.905a2.857 2.857 0 1 0 0-5.713 2.857 2.857 0 0 0 0 5.713z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav>
                <b>
                    Customer service
                </b>
                <ul>
                    {customerService.map(item => (
                        <li key={item.name}>
                            <Link href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav>
                <b>
                    About
                </b>
                <ul>
                    {about.map(item => (
                        <li key={item.name}>
                            <Link href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav>
                <b>
                    Useful links
                </b>
                <ul>
                    {usefulLinks.map(item => (
                        <li key={item.name}>
                            <Link href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Topblock;