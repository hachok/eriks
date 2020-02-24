import { ActionType, getType } from 'typesafe-actions';
import * as productsActions from 'src/actions/products.actions';
import { IProduct, IProductServer } from 'src/types/products.types';
import { v4 as uuidv4 } from 'uuid';

type Action = ActionType<typeof productsActions>;

const initialState: IProduct[] = [];

const loadProducts = (products: IProductServer[]) => {
  return products.map((product) => {
    const badges = product.badges.split('|');
    return { ...product, id: uuidv4(), isHide: false, badges };
  });
};

export const productsReducer = (state = initialState, action: Action): IProduct[] => {
  switch (action.type) {
    case getType(productsActions.loadProductsAsync.success):
      return loadProducts(action.payload.products);
    default:
      return state;
  }
};
