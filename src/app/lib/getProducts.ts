import { revalidatePath } from "next/cache";

export async function getProducts(params: any) {
    const page = params.page || '1';
    const limit = params.limit || '9';

    const obj = Object.entries(params);
    let str = '?';
    str += obj.reduce((init, el, index, arr) => {
        return init + el[0] + '=' + el[1] + '&';
    }, '');


    str += `page=${page}&limit=${limit}`;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(`${baseUrl}/api/products/${str}`);

    const data = await response.json();
    return data;
}