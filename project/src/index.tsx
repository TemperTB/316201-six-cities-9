import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { OFFERS } from './mocks/offers';
import { FAVORITE_OFFERS } from './mocks/favorite-offers';
import { REVIEWS } from './mocks/reviews';

const Setting = {
  PLACES_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PLACES_COUNT}
      offers={OFFERS}
      favoriteOffers={FAVORITE_OFFERS}
      reviews={REVIEWS}
    />
  </React.StrictMode>,
  document.querySelector('#root'),
);
