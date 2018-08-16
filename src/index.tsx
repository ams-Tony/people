import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './service/reducer';

export const store = compose(applyMiddleware(thunk))(createStore)(reducer);
import App from './component/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
