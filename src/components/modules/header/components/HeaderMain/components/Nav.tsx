import { Dispatch, FunctionComponent, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
// clsx
import clsx from "clsx";
// translation
import { useTranslations } from "next-intl";
// next
import Link from "next/link";
import Logo from "@/components/elements/logo/Logo";
import { openCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ProductAdded } from "@/types/products";
import SearchResults from "./SearchResults";
import { useInput } from "@/hooks/useInput";


interface NavProps {
  menuState: { isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>> };
}

const Nav: FunctionComponent<NavProps> = ({ menuState }) => {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const { language } = useSelector((state: RootState) => state.language);
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('common');

  const phrases = [t("searching_boxing_gloves"), t("searching_gi")];
  const [indexes, setIndexes] = useState({ index: 0, currentIndex: 0 });
  const { productsInCart } = useSelector((state: RootState) => state.cart);

  const appliedInput = useInput(query);

  const dispatch = useDispatch();

  useEffect(() => {
    const text = phrases[indexes.index];
    if (indexes.currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setPlaceholder(prevText => prevText + text[indexes.currentIndex]);
        setIndexes(prev => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setPlaceholder('');
        setIndexes(prev => ({ ...prev, index: (prev.index + 1) % phrases.length }));
        setIndexes(prev => ({ ...prev, currentIndex: 0 }));
      }, 2500);
    }
  }, [indexes, phrases]);

  const countOfProducts: number = useMemo(() => {
    return productsInCart?.reduce((init: number, product: ProductAdded) => init + product.quantity, 0) || 0;
  }, [productsInCart]);

  const inputRef = useRef(null);

  return (
    <nav>
      <div className="px-2 container flex justify-between items-center flex-wrap gap-4">
        <div className="grow-1">
          <Logo />
        </div>
        <div className="order-2 basis-full md:order-1 grow-[6] lg:grow-[4] md:basis-auto relative h-10">
          <button
            className="absolute left-4 z-10 hover:cursor-pointer"
            aria-label="Search button"
            style={{ width: '21px', height: '23px', top: '50%', transform: 'translate(0,-50%)' }}
          >
            <svg width="21" height="23" viewBox="0 0 21 23" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="M14.398 14.483 19 19.514l-1.186 1.014-4.59-5.017a8.317 8.317 0 0 1-4.888 1.578C3.732 17.089 0 13.369 0 8.779S3.732.472 8.336.472c4.603 0 8.335 3.72 8.335 8.307a8.265 8.265 0 0 1-2.273 5.704ZM8.336 15.53c3.74 0 6.772-3.022 6.772-6.75 0-3.729-3.031-6.75-6.772-6.75S1.563 5.051 1.563 8.78c0 3.728 3.032 6.75 6.773 6.75Z"></path></svg>
          </button>
          <input
            className="rounded-md ps-16 bg-gray full-size absolute left-0 right-0 top-0 bottom-0"
            placeholder={placeholder}
            ref={inputRef}
            value={query}
            onChange={(e)=> {
              setQuery(e.target.value)
            }}
            onClick={(e) => {
              setIsVisible(true);
            }}
          />
          <SearchResults 
            query={appliedInput}
            language={language}
            inputRef={inputRef}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </div>
        <div className="md:order-2 flex pr-2 gap-4 grow-[1] justify-end items-center" style={{ flexShrink: 1, flexBasis: 'auto' }}>
          <Link href="/account/login" aria-label="Profile button">
            <svg className="w-8 h-8" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" ><path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.429a3.571 3.571 0 1 0 0 7.142 3.571 3.571 0 0 0 0-7.142zm0 10c2.558 0 5.114.471 7.664 1.411A3.571 3.571 0 0 1 22 18.19v3.096c0 .394-.32.714-.714.714H2.714A.714.714 0 0 1 2 21.286V18.19c0-1.495.933-2.833 2.336-3.35 2.55-.94 5.106-1.411 7.664-1.411zm0 1.428c-2.387 0-4.775.44-7.17 1.324a2.143 2.143 0 0 0-1.401 2.01v2.38H20.57v-2.38c0-.898-.56-1.7-1.401-2.01-2.395-.885-4.783-1.324-7.17-1.324z"></path></svg>
          </Link>
          <button
            onClick={() => {
              dispatch(openCart())
            }}
            aria-label="Cart button"
            className="relative"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="w-8 h-8"><path d="M12 2c2.761 0 5 2.089 5 4.667V8h2.2a.79.79 0 0 1 .8.778v12.444a.79.79 0 0 1-.8.778H4.8a.789.789 0 0 1-.8-.778V8.778A.79.79 0 0 1 4.8 8H7V6.667C7 4.09 9.239 2 12 2zm6.4 7.556H5.6v10.888h12.8V9.556zm-6.4-6c-1.84 0-3.333 1.392-3.333 3.11V8h6.666V6.667c0-1.719-1.492-3.111-3.333-3.111z"></path></svg>
            {countOfProducts > 0 && (
              <span className="w-[20px] h-[20px] rounded-full absolute top-[-5px] right-[-5px] bg-red text-white text-sm font-medium">
                {countOfProducts}
              </span>
            )}
          </button>
          <button
            style={{ width: '20px' }}
            className={clsx(
              'flex flex-col gap-1 md:hidden pr-4',
              {
                'gap-0': menuState.isMenuOpen
              }
            )}
            onClick={() => menuState.setIsMenuOpen(!menuState.isMenuOpen)}
          >
            <span className={clsx(
              "bg-black transition-transform",
              {
                'rotate-45 origin-center translate-y-[6px]': menuState.isMenuOpen
              }
            )} style={{ width: '20px', height: '2px' }}></span>
            <span className={clsx(
              "bg-black transition-transform",
              {
                'opacity-0': menuState.isMenuOpen
              }
            )} style={{ width: '20px', height: '2px' }}></span>
            <span className={clsx(
              "bg-black transition-transform",
              {
                '-rotate-45 origin-center translate-y-[-6px]': menuState.isMenuOpen
              }
            )} style={{ width: '20px', height: '2px' }}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;