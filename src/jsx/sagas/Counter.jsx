import 'babel-polyfill';
import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { increment } from '../modules/Counter';

export default function* incrementAsync() {
  yield call(delay, 1000);
  yield put(increment(100));
}

