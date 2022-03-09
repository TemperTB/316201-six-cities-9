import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType } from './action';
import { sortTypes, START_CITY } from '../const';
import { OFFERS } from '../mocks/offers';
import { filterOffers, sortOffers } from '../utils';
import { OffersType } from '../types/offers';


const initialState = {
  currentCity: START_CITY,
  validOffers: sortOffers(filterOffers(OFFERS, START_CITY), sortTypes[0]),
  offers: OFFERS,
  sortType: sortTypes[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { city } = action.payload;
    state.currentCity = city;
    const filteredOffers: OffersType = filterOffers(state.offers, city);
    const sortedOffers: OffersType = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
  });
  builder.addCase(changeSortType, (state, action) => {
    const { sortType } = action.payload;
    state.sortType = sortType;
    const filteredOffers: OffersType = filterOffers(state.offers, state.currentCity);
    const sortedOffers: OffersType = sortOffers(filteredOffers, sortType);
    state.validOffers = sortedOffers;
  });
});

export { reducer };
