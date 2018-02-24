import { combineReducers } from 'redux';

import headerReducer from './Header';
import counterReducer from './Counter';

const rootReducer = combineReducers({
  header: headerReducer,
  counter: counterReducer,
});

export default rootReducer;

