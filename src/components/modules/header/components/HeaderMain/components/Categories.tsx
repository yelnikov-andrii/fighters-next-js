import { Dispatch, FunctionComponent, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
// redux
import { fetchCategories } from "@/redux/action-creator/Categories/fetchCategories";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
//types
import { CategoryInt } from "@/types/categories";
//next
import Link from "next/link";
//components
import Subcategories from "./Subcategories";
import Loading from "./Loading";
// hooks
import { useDelayMouseenter } from "@/hooks/useDelayMouseEnter";
//clsx
import clsx from "clsx";


interface CategoriesProps {
    menuState: { isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>> };
    categoriesAreOpen: boolean;
    headerRef: any;
}

const Categories: FunctionComponent<CategoriesProps> = ({ menuState, categoriesAreOpen, headerRef }) => {
    const { categories, categoriesLoading, categoriesError } = useSelector((state: RootState) => state.categories);
    const { language } = useSelector((state: RootState) => state.language);

    const [isOpenState, setIsOpenState] = useState({ isOpen: false, isHovered: false });
    const [selectedCategory, setSelectedCategory] = useState<null | CategoryInt>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [subcategoriesAreOpen, setSubcategoriesAreOpen] = useState(false);
    const [style, setStyle] = useState({});

    const dispatch = useDispatch();

    useDelayMouseenter(isOpenState, setIsOpenState);

    function changeCategory(category: CategoryInt | null) {
        setSelectedCategory(category);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        dispatch(fetchCategories());

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (headerRef.current && !isMobile) {
            const height = headerRef?.current?.offsetHeight;
            setStyle({ top: height });
        }

        if (isMobile) {
            setStyle({ top: 0 })
        }
    }, [headerRef?.current?.offsetHeight]);

    useEffect(() => {
        if (!menuState.isMenuOpen) {
            setSelectedCategory(null);
            setSubcategoriesAreOpen(false);
        }
    }, [menuState.isMenuOpen]);

    if (categoriesLoading) {
        return (
            <div
                className={clsx(
                    'p-4 relative border-b-2 border-gray transition-visibility',
                )}
            >
                <div className="container relative z-10 md:static">
                    <div className="flex gap-4 flex-col md:flex-row items-center flex-wrap xl:justify-between">
                        <Loading />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className={clsx(
                'p-2 lg:p-4 border-b-2 border-gray transition-visibility categories categories-transition',
                {
                    'visible relative': menuState.isMenuOpen && isMobile,
                    'hidden relative': !menuState.isMenuOpen && isMobile,
                    'top-[-100px] absolute': !categoriesAreOpen && !isMobile,
                }
            )}
            onMouseEnter={() => {
                if (!isMobile) setIsOpenState(prev => ({ ...prev, isHovered: true }));
            }}
            onMouseLeave={() => {
                if (!isMobile) setIsOpenState(prev => ({ ...prev, isHovered: false }));
            }}
        >
            <div className="container relative z-10 md:static">
                <div className="flex gap-1 md:gap-4 flex-col md:flex-row items-center flex-wrap 3xl:justify-between">
                    <Link
                        href='/products'
                        className="font-bold uppercase py-2 md:py-0 w-full md:w-auto text-black font-osvald hover:underline flex gap-2 items-center"
                        onMouseEnter={() => {
                            if (!isMobile) setIsOpenState(prev => ({ ...prev, isHovered: false }));
                        }}
                    >
                        {language === 'EN' ? 'All products' : 'Усі продукти'}
                    </Link>
                    {categories.map((category: CategoryInt) => (
                        isMobile ? (
                            <div
                                className="font-bold justify-between hover:cursor-pointer md:justify-start uppercase py-1 md:py-0 w-full md:w-auto text-black font-osvald hover:underline flex gap-1 items-center"
                                onClick={() => {
                                    if (isMobile) changeCategory(category);
                                    if (isMobile) setSubcategoriesAreOpen(true);

                                }}
                            >
                                {language === 'EN' ? category.name_en : category.name_ukr}
                                <svg className="-rotate-90 md:rotate-0" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
                            </div>
                        ) : (
                            <Link
                                onMouseEnter={() => {
                                    if (!isMobile) changeCategory(category);
                                    if (!isMobile) setIsOpenState(prev => ({ ...prev, isHovered: true }));
                                }}
                                key={category.id}
                                href={`/products?category=${category.name_en.replaceAll(' ', '-').replaceAll('&', 'and')}`}
                                className="font-bold justify-between md:justify-start uppercase py-2 md:py-0 w-full md:w-auto text-black font-osvald hover:underline flex gap-2 items-center"
                            >
                                {language === 'EN' ? category.name_en : category.name_ukr}
                                <svg className="-rotate-90 md:rotate-0" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation"><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
                            </Link>
                        )
                    ))}
                </div>
                <Subcategories
                    category={selectedCategory}
                    setIsOpenState={setIsOpenState}
                    isOpenState={isOpenState}
                    style={style}
                    menuState={menuState}
                    subcategoriesState={{ isMobile, subcategoriesAreOpen, setSubcategoriesAreOpen }}
                />
            </div>
        </div>
    );
}

export default Categories;