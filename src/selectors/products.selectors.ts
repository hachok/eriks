import { IRootState } from 'src/reducers';
import { IProduct } from 'src/types/products.types';

export const getProducts = (state: IRootState): IProduct[] => state.products;
