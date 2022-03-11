import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers } from './action';
import { sortTypes, START_CITY } from '../const';
import { filterOffers, sortOffers } from '../utils';
import { City, Offers } from '../types/offers';

type InitalState = {
  isDataLoaded: boolean,
  currentCity: City,
  offers: Offers,
  sortType: string,
  validOffers: Offers,
}

const initialState: InitalState = {
  isDataLoaded: false,
  currentCity: START_CITY,
  offers: [],
  sortType: sortTypes[0],
  validOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { city } = action.payload;
    state.currentCity = city;
    const filteredOffers: Offers = filterOffers(state.offers, city);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
  });
  builder.addCase(changeSortType, (state, action) => {
    const { sortType } = action.payload;
    state.sortType = sortType;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, sortType);
    state.validOffers = sortedOffers;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
    state.isDataLoaded = true;
  });
});

export { reducer };
