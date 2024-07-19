import { baseUrl } from '@/data/url';
import axios from 'axios';

async function getBrands() {
    const response = await axios.get(`${baseUrl}/brands`);
    return response?.data;
}

export default getBrands;