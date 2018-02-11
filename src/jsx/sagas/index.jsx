import { takeEvery } from 'redux-saga';

import incrementAsync from './Counter';

export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

