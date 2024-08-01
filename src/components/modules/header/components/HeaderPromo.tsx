'use client'
import { FunctionComponent, useEffect } from "react";
// next
import Link from "next/link";
import { useRouter } from "next/navigation";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeLang } from "@/redux/slices/langSlice";
import { changeCurrency } from "@/redux/slices/currencySlice";
//components and data
import MySelect from "@/components/elements/select/MySelect";
import { currencies, languages } from '@/data/header';
// cookies
import { setLanguageCookie, getLanguageCookie } from "@/utils/cookies";
//translation
import { useTranslations } from "next-intl";

interface HeaderPromoProps {

}

const HeaderPromo: FunctionComponent<HeaderPromoProps> = () => {
    const { language } = useSelector((state: RootState) => state.language);
    const { currency } = useSelector((state: RootState) => state.currency);
    const router = useRouter();

    const t = useTranslations('common');

    const selectedCurrency: string = currencies?.find(curr => curr.includes(currency)) || currencies[0];

    const dispatch = useDispatch();

    function changeLanguageHandler(lang: string) {
        dispatch(changeLang(lang));
        setLanguageCookie(lang.toLowerCase());
        router.refresh();
    }

    function changeCurrencyHandler(currency: string) {
        dispatch(changeCurrency(currency));
    }

    useEffect(() => {
      const lang = getLanguageCookie();
      if (lang) {
        dispatch(changeLang(lang.toUpperCase()));
      }
    }, []);

    return (
        <div className="bg-gray-light full-size p-2">
            <div className="lg:container flex justify-between">
                <Swiper
                    className="mySwiper text-sm"
                    spaceBetween={30}
                    loop
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="flex lg:items-center gap-2">
                            <strong>{t("free_delivery")} £99*</strong>
                            <Link className="hover:opacity-60 flex" href="/delivery">{t('learn_more')}</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex lg:items-center gap-2">
                            <strong>{t("get_discount")} 10% {t("your_first_order")}</strong>
                            <Link className="hover:opacity-60" href="/delivery">{t("here")}</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <nav className="hidden md:block">
                    <ul className="flex gap-2 items-center">
                        <li className="w-max relative px-4">
                            <Link className="font-bold" href="/help">{t("help_and_faq")}</Link>
                        </li>
                        <li className="w-max relative px-1 lg:px-4 z-50">
                            <MySelect
                                selected={language}
                                menuItems={languages}
                                action={changeLanguageHandler}
                            />
                        </li>
                        <li className="w-max relative px-4 z-50">
                            <MySelect
                                selected={selectedCurrency}
                                menuItems={currencies}
                                action={changeCurrencyHandler}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderPromo;