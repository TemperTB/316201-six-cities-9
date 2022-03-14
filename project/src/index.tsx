import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FAVORITE_OFFERS } from './mocks/favorite-offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        favoriteOffers={FAVORITE_OFFERS}
      />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
