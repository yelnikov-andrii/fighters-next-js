import { baseUrl } from "@/data/url";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const subsubcategory = searchParams.get('subsubcategory');
    const sizes = searchParams.get('sizes');
    const ages = searchParams.get('ages');
    const genders = searchParams.get('genders');
    const materials = searchParams.get('materials');
    const colors = searchParams.get('colors');
    const brands = searchParams.get('brands');
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '9';
    const lang = searchParams.get('lang') || 'en';
    const sort = searchParams.get('sort') || 'AlphAsc';

    let str = '';

    if (category) {
        str += `category=${category}`;
    }

    if (subcategory) {
        str += `subcategory=${subcategory}`;
    }

    if (subsubcategory) {
        str += `subsubcategory=${subsubcategory}`;
    }

    let strWithoutFilters = str;

    if (colors) {
        if (str) {
            str += `&colors=${colors}`;
        } else {
            str += `colors=${colors}`;
        }
    }

    if (brands) {
        if (str) {
            str += `&brands=${brands}`;
        } else {
            str += `brands=${brands}`;
        }
    }

    if (sizes) {
        if (str) {
            str += `&sizes=${sizes}`;
        } else {
            str += `sizes=${sizes}`;
        }
    }

    if (ages) {
        if (str) {
            str += `&ages=${ages}`;
        } else {
            str += `ages=${ages}`;
        }
    }

    if (genders) {
        if (str) {
            str += `&genders=${genders}`;
        } else {
            str += `genders=${genders}`;
        }
    }

    if (materials) {
        if (str) {
            str += `&materials=${materials}`;
        } else {
            str += `materials=${materials}`;
        }
    }

    if (sort) {
        if (str) {
            str += `&sort=${sort}`;
        } else {
            str += `sort=${sort}`;
        }
    }

    if (lang) {
        if (str) {
            str += `&lang=${lang}`;
        } else {
            str += `lang=${lang}`;
        }
    }

    let strWithPageAndLimit = str;

    if (str.length > 0) {
        strWithPageAndLimit += `&page=${page}&limit=${limit}`;
    } else {
        strWithPageAndLimit += `page=${page}&limit=${limit}`;
    }

    if (category || subcategory || subsubcategory) {
        const response = await fetch(`${baseUrl}/products-by-category?${strWithPageAndLimit}`);
        const data = await response.json();
        const responseAllProducts = await fetch(`${baseUrl}/products-by-category?${strWithoutFilters}`);
        const allProducts = await responseAllProducts.json();
        return NextResponse.json({ data, allProducts });
    } else {
        if (str) {
            const response = await fetch(`${baseUrl}/products?${strWithPageAndLimit}`);
            const data = await response.json();
            const allProductsResponse = await fetch(`${baseUrl}/products`);
            const allProducts = await allProductsResponse.json();
            return NextResponse.json({ data: data, allProducts: allProducts });
        } else {
            const response = await fetch(`${baseUrl}/products?page=${page}&limit=${limit}`);
            const data = await response.json();
            const allProductsResponse = await fetch(`${baseUrl}/products`);
            const allProducts = await allProductsResponse.json();
            return NextResponse.json({ data: data, allProducts: allProducts });
        }

    }
}