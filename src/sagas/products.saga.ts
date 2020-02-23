import { call, takeLatest } from 'redux-saga/effects';
import * as productsActions from 'src/actions/products.actions';
import { loadProducts } from 'src/services/products.service';

export function* loadProductsSaga(): Generator {
  try {
    const response = yield call(loadProducts);
    console.log('response', response);
  } catch (e) {
    console.log(e);
  }
}

export default function* productsSaga() {
  yield takeLatest(productsActions.loadProductsAsync.request, loadProductsSaga);
}
