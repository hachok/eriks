import { IRootState } from 'src/reducers';
import { IProduct } from 'src/types/products.types';
import { createSelector } from 'reselect';

export const getProducts = (state: IRootState): IProduct[] => state.products;

export const isHighLighted = (featureId: string) =>
  createSelector(getProducts, (products) => {
    let highlighted = false;
    if (products.length) {
      let value = '';
      products
        .filter((p) => p.display)
        .forEach((product, index) => {
          const feature = product.features.find((el) => el.id === featureId);
          if (index === 0) {
            value = feature?.value || '';
          } else if (feature?.value !== value) {
            highlighted = true;
          }
        });
    }

    return highlighted;
  });
