import { baseUrl } from "@/data/url";
import { RootState } from "@/redux/store";
import { SubcategoryInt, SubsubcategoryInt } from "@/types/categories";
import axios from "axios";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface SubSubCategoryProps {
    subcategory: SubcategoryInt;
}

const SubSubCategory: FunctionComponent<SubSubCategoryProps> = ({ subcategory }) => {
    const { language } = useSelector((state: RootState) => state.language);
    const [subsubcategories, setSubsubcategories] = useState([]);
    const [loadingSubsubcategories, setLoadingSubsubcategories] = useState(false);
    const [subsubcategoryError, setSubsubcategoryError] = useState('');

    const fetchSubsubCategories = async (subcategoryId: number) => {
        try {
          setLoadingSubsubcategories(true);
          const response = await axios.get(`${baseUrl}/subsubcategories?subcategoryId=${subcategoryId}`);
          setSubsubcategories(response.data);
          setLoadingSubsubcategories(false);
        } catch(e: any) {
          setSubsubcategoryError(e.message);
        }
      };
    
      useEffect(() => {
        fetchSubsubCategories(subcategory.id);
      }, [subcategory]);

    return (
        <div>
            <Link
                href={`/products?subcategory=${subcategory.name_en}`}
                className="font-bold mb-4 inline-block hover:text-silver"
            >
                {language === 'EN' ? subcategory.name_en : subcategory.name_ukr}
            </Link>
            <ul>
                {subsubcategories.map((subsubcategory: SubsubcategoryInt) => (
                    <li key={subsubcategory.id}>
                        <Link
                            className="capitalize hover:text-silver text-sm"
                            href={`/products?subsubcategory=${subsubcategory.name_en}`}
                            key={subsubcategory.id}
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