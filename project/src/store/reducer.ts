import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { START_CITY } from '../const';
import { OFFERS } from '../mocks/offers';
import { filterCity } from '../utils';


const initialState = {
  currentCity: START_CITY,
  filteredOffers: filterCity(OFFERS, START_CITY),
  offers: OFFERS,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { city } = action.payload;
    state.currentCity = city;
    state.filteredOffers = filterCity(state.offers, city);
  });
});

export { reducer };
