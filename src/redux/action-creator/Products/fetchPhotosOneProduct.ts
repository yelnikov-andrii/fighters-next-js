import axios from 'axios';
import { getphotos, getphotosError, getphotosSuccess } from '../../slices/productPhotosSlice';
import { baseUrl } from '@/data/url';

export const fetchPhotos = (productId: number): any => {
  return async (dispatch: any) => {
    dispatch(getphotos());
    try {
      const response: any = await axios.get(`${baseUrl}/products-photos/${productId}`);
      dispatch(getphotosSuccess(response.data));
    } 
    catch(e: any) {
      dispatch(getphotosError('Error can not load images'));
    }
  };
};