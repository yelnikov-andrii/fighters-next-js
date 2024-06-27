import { baseUrl } from '@/data/url';
import axios from 'axios';

export default async function getProduct(productId: string) {
  const response = await axios.get(`${baseUrl}/products/${productId}`);
  return response?.data;
}