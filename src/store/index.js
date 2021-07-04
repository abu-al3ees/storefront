import { createStore, combineReducers } from 'redux';

import categoriesReducer from './categories-reducer';
import productsReducer from './products-reducer';
import { applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk))
}

export default store;