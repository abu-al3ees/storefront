import { createStore, combineReducers } from 'redux';

import categoriesReducer from './categories-reducer';
import productsReducer from './products-reducer';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = () => {
  return createStore(reducers);
}

export default store;