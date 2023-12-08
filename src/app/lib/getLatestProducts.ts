import { baseUrl } from '@/data/url';
import axios from 'axios';

export default async function getLatestProducts() {
  const response = await axios.get(`${baseUrl}/products?latest=true&page=1&limit=6`);
  return response?.data.rows;
}
