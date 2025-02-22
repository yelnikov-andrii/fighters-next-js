import { FunctionComponent } from "react";
// translation
import { useTranslations } from "next-intl";
// next
import MemoizedLink from "@/components/elements/memoizedLink/MemoizedLink";


interface SalesProps {

}

const Sales: FunctionComponent<SalesProps> = () => {
    const t = useTranslations('common');
    return (
        <div className="bg-green px-1 size-full md:px-2 py-1">
            <div className="md:container px-2 md:px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
                <b className='text-xl font-osvald'>
                    {t('summer_sale')}
                </b>
                <span>
                    {t('save_up')} 70%
                </span>
                <MemoizedLink href="/" className="py-1 px-6 bg-black text-white font-bold uppercase text-sm rounded">
                   {t('shop_now')}
                </MemoizedLink>
            </div>
        </div>
    );
}

export default Sales;