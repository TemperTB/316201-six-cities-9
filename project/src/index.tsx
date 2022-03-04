import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { favoriteOffers } from './mocks/favorite-offers';

const Setting = {
  PLACES_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PLACES_COUNT}
      offers={offers}
      favoriteOffers={favoriteOffers}
    />
  </React.StrictMode>,
  document.querySelector('#root'),
);
