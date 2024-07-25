
import { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";
// components and data
import { baseUrl } from "@/data/url";
import SubSubCategory from "./Subsubcategory";
import SubCategoriesLoading from "./SubcategoriesLoading";
// redux
import { fetchSubCategories } from "@/redux/action-creator/Categories/fetchCategories";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
// types
import { CategoryInt } from "@/types/categories";
// clsx
import clsx from "clsx";
// next
import Image from "next/image";

interface SubcategoriesProps {
    category: null | CategoryInt;
    setIsOpenState: Dispatch<SetStateAction<{ isOpen: boolean, isHovered: boolean }>>;
    isOpenState: { isOpen: boolean, isHovered: boolean };
    style: any;
    menuState: { isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>> };
    subcategoriesState: { isMobile: boolean, subcategoriesAreOpen: boolean, setSubcategoriesAreOpen: Dispatch<SetStateAction<boolean>> };
}

const Subcategories: FunctionComponent<SubcategoriesProps> = ({ category, setIsOpenState, isOpenState, style, menuState, subcategoriesState }) => {
    const { subcategories, subCategoriesLoading, subCategoriesError } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        if (category) {
            dispatch(fetchSubCategories(category.id));
        }
    }, [category]);

    return (
        subcategoriesState.isMobile ? (
            subcategoriesState.subcategoriesAreOpen && (
                <div
                    style={style}
                    className={clsx(
                        `absolute p-2 box-border bg-white w-full left-0 top-0 right-0 overflow-hidden transition-all duration-[100ms] ease-in-out shadow-lg`,
                        {
                            "invisible max-h-0": !isOpenState.isOpen && !menuState.isMenuOpen,
                            "visible max-h-[400px]": isOpenState.isOpen && !menuState.isMenuOpen,
                            "opacity-100 max-h-auto z-50 visible overflow-y-scroll": menuState.isMenuOpen && subcategoriesState.isMobile && subcategoriesState.subcategoriesAreOpen,
                            "opacity-0": !menuState.isMenuOpen && subcategoriesState.isMobile && !subcategoriesState.subcategoriesAreOpen
                        }
                    )}
                    onMouseOver={() => {
                        setIsOpenState(prev => ({ ...prev, isHovered: true }));
                    }}
                    onMouseLeave={() => {
                        setIsOpenState(prev => ({ ...prev, isHovered: false }));

                    }}
                >
                    <div className="flex flex-col gap-[8px]">
                        <button className="flex gap-1 items-center mb-2" onClick={() => {
                            subcategoriesState.setSubcategoriesAreOpen(false);

                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" role="presentation"><path d="m6.797 11.625 8.03-8.03 1.06 1.06-6.97 6.97 6.97 6.97-1.06 1.06z"></path></svg>
                            Back
                        </button>
                        {subcategories?.map((subcategory) => (
                            <SubSubCategory
                                subcategory={subcategory}
                                menuState={menuState}
                                key={subcategory.id}
                            />
                        ))}
                    </div>
                </div>
            )
        ) : (
            <div
                style={style}
                className={clsx(
                    `absolute p-2 box-border bg-white w-full left-0 right-0 overflow-hidden transition-all duration-[100ms] ease-in-out shadow-lg`,
                    {
                        "invisible max-h-0": !isOpenState.isOpen && !menuState.isMenuOpen,
                        "visible max-h-[400px]": isOpenState.isOpen && !menuState.isMenuOpen,
                        "opacity-100 max-h-[400px] z-50 visible overflow-y-scroll": menuState.isMenuOpen && subcategoriesState.isMobile && subcategoriesState.subcategoriesAreOpen,
                        "opacity-0": !menuState.isMenuOpen && subcategoriesState.isMobile && !subcategoriesState.subcategoriesAreOpen
                    }
                )}
                onMouseOver={() => {
                    setIsOpenState(prev => ({ ...prev, isHovered: true }));
                }}
                onMouseLeave={() => {
                    setIsOpenState(prev => ({ ...prev, isHovered: false }));

                }}
            >
                {subCategoriesLoading ? (
                    null
                ) : (
                    <div className="flex flex-wrap justify-between gap-8 md:gap-2">
                        {subcategories?.map((subcategory) => (
                            <SubSubCategory
                                subcategory={subcategory}
                                menuState={menuState}
                                key={subcategory.id}
                            />
                        ))}
                        <div>
                            <Image
                                src={`${baseUrl}/${category?.photo}` || ''}
                                alt=""
                                className="w-72 h-75"
                                width={280}
                                height={300}
                            />
                        </div>
                    </div>
                )}
            </div >
        )
    );
}

export default Subcategories;