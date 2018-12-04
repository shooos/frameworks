import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

const configureStore = (history) => {
  return createStore(createRootReducer(history), compose(applyMiddleware(routerMiddleware(history), thunk)));
};

export default configureStore;
