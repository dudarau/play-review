import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import rootReducer from './root';

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    applyMiddleware(createDebounce(), thunk)
  );
}