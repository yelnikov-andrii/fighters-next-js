import { baseUrl } from "@/data/url";
import { RootState } from "@/redux/store";
import { SubcategoryInt, SubsubcategoryInt } from "@/types/categories";
import axios from "axios";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

interface SubSubCategoryProps {
    subcategory: SubcategoryInt;
    menuState: { isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>> };
}

const SubSubCategory: FunctionComponent<SubSubCategoryProps> = ({ subcategory, menuState }) => {
    const { language } = useSelector((state: RootState) => state.language);
    const [subsubcategories, setSubsubcategories] = useState([]);
    const [loadingSubsubcategories, setLoadingSubsubcategories] = useState(false);
    const [subsubcategoryError, setSubsubcategoryError] = useState('');
    const [textIsVisible, setTextIsVisible] = useState(false);

    const textTimer: any = useRef();

    useEffect(() => {
         textTimer.current = setTimeout(() => {
            setTextIsVisible(true);
        }, 100);

        return () => {
            clearTimeout(textTimer.current);
        }
    }, []);

    const fetchSubsubCategories = async (subcategoryId: number) => {
        try {
          setLoadingSubsubcategories(true);
          const response = await axios.get(`${baseUrl}/subsubcategories?subcategoryId=${subcategoryId}`);
          setSubsubcategories(response.data);
          setLoadingSubsubcategories(false);

          textTimer.current = setTimeout(() => {
            setTextIsVisible(true);
        }, 100);
        } catch(e: any) {
          setSubsubcategoryError(e.message);
        }
      };
    
      useEffect(() => {
        fetchSubsubCategories(subcategory.id);

        return () => {
            clearTimeout(textTimer.current);
        };

      }, [subcategory]);

    return (
        <div>
            <Link
                href={`/products?subcategory=${subcategory.name_en.replaceAll(' ', '-').replaceAll('&', 'and')}`}
                className={clsx('font-bold mb-4 inline-block hover:text-silver transition-opacity duration-1000', {
                    'opacity-1': textIsVisible,
                    'opacity-0': !textIsVisible,
                })}
                onClick={() => menuState.setIsMenuOpen(false)}
            >
                {language === 'EN' ? subcategory.name_en : subcategory.name_ukr}
            </Link>
            <ul>
                {subsubcategories.map((subsubcategory: SubsubcategoryInt) => (
                    <li key={subsubcategory.id}>
                        <Link
                            className={clsx('capitalize hover:text-silver text-sm transition-opacity duration-1000', {
                                'opacity-1': textIsVisible,
                                'opacity-0': !textIsVisible,
                            })}
                            href={`/products?subsubcategory=${subsubcategory.name_en.replaceAll(' ', '-').replaceAll('&', 'and')}`}
                            key={subsubcategory.id}
                            onClick={() => menuState.setIsMenuOpen(false)}
                        >
                            {language === 'EN' ? subsubcategory.name_en : subsubcategory.name_ukr}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubSubCategory;