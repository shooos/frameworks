import 'common/less/common.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory({basename: '/react'});
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
