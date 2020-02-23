import { combineReducers } from 'redux';
import { IProduct } from 'src/types/products.types';
import { productsReducer } from 'src/reducers/products.reducer';

export interface IRootState {
  products: IProduct[];
}

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;
