import { createAction, createAsyncAction } from 'typesafe-actions';
import { IPoductId, IProductResponse } from 'src/types/products.types';

export const loadProductsAsync = createAsyncAction(
  'FETCH_PRODUCTS_REQUEST',
  'FETCH_PRODUCTS_SUCCESS',
  'FETCH_PRODUCTS_FAILURE',
)<undefined, IProductResponse, undefined>();

export const toggleProduct = createAction('TOGGLE_PRODUCT')<IPoductId>();
