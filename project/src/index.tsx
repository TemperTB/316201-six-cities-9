import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { OFFERS } from './mocks/offers';
import { FAVORITE_OFFERS } from './mocks/favorite-offers';
import { REVIEWS } from './mocks/reviews';
import { NEARBY_OFFERS } from './mocks/nearby-offers';

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
      nearbyOffers={NEARBY_OFFERS}
    />
  </React.StrictMode>,
  document.querySelector('#root'),
);
