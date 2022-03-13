import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FAVORITE_OFFERS } from './mocks/favorite-offers';
import { REVIEWS } from './mocks/reviews';
import { NEARBY_OFFERS } from './mocks/nearby-offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        favoriteOffers={FAVORITE_OFFERS}
        reviews={REVIEWS}
        nearbyOffers={NEARBY_OFFERS}
      />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
