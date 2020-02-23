import axios, { AxiosResponse } from 'axios';
import { httpConfig } from 'src/utils/http';
import { IProduct } from 'src/types/products.types';
import { API_URL } from 'src/constants';

export const loadProducts = (): Promise<IProduct[]> =>
  axios.get(`${API_URL}/compare/products`, httpConfig()).then((res: AxiosResponse) => res.data);
