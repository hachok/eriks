// external imports
import { all, fork } from 'redux-saga/effects';
import productsSaga from 'src/sagas/products.saga';

export const rootSaga = function* root() {
  yield all([fork(productsSaga)]);
};
