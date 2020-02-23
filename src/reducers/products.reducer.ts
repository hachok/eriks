import {ActionType, getType} from 'typesafe-actions';
import * as productsActions from 'src/actions/products.actions';
import {IProduct} from 'src/types/products.types';

type Action = ActionType<typeof productsActions>;

const initialState: IProduct[] = [];

export const productsReducer = (
  state = initialState,
  action: Action,
): IProduct[] => {
  switch (action.type) {
    case getType(productsActions.loadProductsAsync.success):
      return action.payload.products;
    default:
      return state;
  }
};
