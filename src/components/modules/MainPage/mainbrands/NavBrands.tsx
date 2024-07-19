import { BrandI } from '@/types/main';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as React from 'react';

function NavBrands({ brand }: { brand: BrandI }) {
    const t = useTranslations('common');

    return (
        <nav className='px-4 py-2 mb-4'>
            {brand.name === 'Venum' && (
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href="/products?subcategory=1&brands=Venum" className='hover:underline'>
                            Venum {t("boxing_gloves")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subcategory=4&brands=Venum" className='hover:underline'>
                            Venum {t("boxing_clothes")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subsubcategory=5&brands=Venum" className='hover:underline'>
                            Venum {t("mouth_guards")}
                        </Link>
                    </li>
                </ul>
            )}
            {brand.name === 'Reebok' && (
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href="/products?subcategory=1&brands=Reebok" className='hover:underline'>
                            Reebok {t("boxing_gloves")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subcategory=3&brands=Reebok" className='hover:underline'>
                            Reebok {t("punch_bags")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subsubcategory=36&brands=Reebok" className='hover:underline'>
                            Reebok {t("skipping_ropes")}
                        </Link>
                    </li>
                </ul>
            )}
            {brand.name === 'Ringside' && (
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href="/subcategory=1&brands=Ringside" className='hover:underline'>
                            Ringside {t("boxing_gloves")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subcategory=2&brands=Ringside" className='hover:underline'>
                            Ringside {t("protection")}
                        </Link>
                    </li>
                </ul>
            )}
            {brand.name === 'Rival' && (
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link href="/brands=Rival&subcategory=1" className='hover:underline'>
                            Rival {t("boxing_gloves")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/products?subcategory=5&brands=Rival" className='hover:underline'>
                            Rival {t("coaching_equipment")}
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default NavBrands;