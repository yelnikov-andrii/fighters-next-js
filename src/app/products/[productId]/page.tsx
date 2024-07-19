import getProduct from '@/app/lib/getProduct';
import Product from '@/components/modules/Product/Product';
import { baseUrl } from '@/data/url';
import { ProductInt } from '@/types/products';
import axios from 'axios';
import type { Metadata, ResolvingMetadata } from 'next';
 
type Props = {
  params: { productId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { productId } = params;
 
  const product: ProductInt = await axios(`${baseUrl}/products/${productId}`).then((res) => res.data);
 
  return {
    title: product.name_en,
    description: product.description_en
  }
}
 
export default async function Page({ params }: Props) {
  const { productId } = params;
  const product = await getProduct(productId);

  return (
        <Product 
          product={product}
        />
  )
}
