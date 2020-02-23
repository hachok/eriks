import { put, call, takeLatest } from 'redux-saga/effects';
import * as productsActions from 'src/actions/products.actions';
import { loadProducts } from 'src/services/products.service';
import { IProductResponse } from 'src/types/products.types';

export function* loadProductsSaga(): Generator {
  try {
    const response = yield call(loadProducts);

    yield put(productsActions.loadProductsAsync.success(response as IProductResponse));
  } catch (e) {
    console.log(e);
  }
}

export default function* productsSaga() {
  yield takeLatest(productsActions.loadProductsAsync.request, loadProductsSaga);
}
