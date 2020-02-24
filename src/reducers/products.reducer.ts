import { ActionType, getType } from 'typesafe-actions';
import * as productsActions from 'src/actions/products.actions';
import { IFeature, IProduct, IProductServer } from 'src/types/products.types';
import { v4 as uuidv4 } from 'uuid';

type Action = ActionType<typeof productsActions>;

const initialState: IProduct[] = [];

const loadProducts = (products: IProductServer[]) => {
  return products.map((product) => {
    const badgesArr = product.badges.split('|');
    const {
      salePrice,
      manufacturerName,
      grossPrice,
      BUP_UOM,
      BUP_Value,
      uom,
      productImage,
      BUP_Conversion,
      minQuantity,
      manufacturerImage,
      name,
      sku,
      listPrice,
      channel,
      display,
      atp,
      badges,
      ...featuresObj
    } = product;

    const features: IFeature[] = [];

    Object.keys(featuresObj)
      .sort()
      .forEach((feature) => {
        features.push({
          id: feature,
          value: featuresObj[feature],
          title: feature,
          isHighLighted: false,
        });
      });
    return { ...product, id: uuidv4(), isHide: false, badges: badgesArr, features };
  });
};

const toggleProduct = (id: string, state) => {
  return state.map((product) => {
    if (product.id === id) {
      return { ...product, display: !product.display };
    }
    return product;
  });
};

export const productsReducer = (state = initialState, action: Action): IProduct[] => {
  switch (action.type) {
    case getType(productsActions.loadProductsAsync.success):
      return loadProducts(action.payload.products);
    case getType(productsActions.toggleProduct):
      return toggleProduct(action.payload.id, state);
    default:
      return state;
  }
};
