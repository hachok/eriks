import {createAsyncAction} from 'typesafe-actions';
import {IError} from 'src/types/error.types';
import {IProduct} from 'src/types/products.types';

export const loadProductsAsync = createAsyncAction(
    'FETCH_PRODUCTS_REQUEST',
    'FETCH_PRODUCTS_SUCCESS',
    'FETCH_PRODUCTS_FAILURE',
)<undefined, IProduct[], IError>();
