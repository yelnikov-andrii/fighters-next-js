'use client'
import { useTranslations } from "next-intl";
import FormButton from "../form-button/FormButton";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeCart } from "@/redux/slices/cartSlice";

function EmptyCart() {
    const t = useTranslations('common');
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-2 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="w-8 h-8"><path d="M12 2c2.761 0 5 2.089 5 4.667V8h2.2a.79.79 0 0 1 .8.778v12.444a.79.79 0 0 1-.8.778H4.8a.789.789 0 0 1-.8-.778V8.778A.79.79 0 0 1 4.8 8H7V6.667C7 4.09 9.239 2 12 2zm6.4 7.556H5.6v10.888h12.8V9.556zm-6.4-6c-1.84 0-3.333 1.392-3.333 3.11V8h6.666V6.667c0-1.719-1.492-3.111-3.333-3.111z"></path></svg>
            <div className="my-2 text-lg text-center justify-center flex items-center">
                {t('cart_is_empty')}
            </div>
            <div className='max-w-[400px] mx-auto'>
                <FormButton type="button">
                    <Link href="/products" onClick={() => dispatch(closeCart())}>
                        {t('go_shoping')}
                    </Link>
                </FormButton>
            </div>
        </div>
    );
}

export default EmptyCart;