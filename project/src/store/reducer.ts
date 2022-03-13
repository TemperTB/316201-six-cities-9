import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers, requireAuthorization, setError } from './action';
import { AuthorizationStatus, sortTypes, START_CITY } from '../const';
import { filterOffers, sortOffers } from '../utils';
import { City, Offers } from '../types/offers';

type InitalState = {
  authorizationStatus: AuthorizationStatus,
  currentCity: City,
  isDataLoaded: boolean,
  error: string,
  offers: Offers,
  sortType: string,
  validOffers: Offers,
}

const initialState: InitalState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentCity: START_CITY,
  error: '',
  isDataLoaded: false,
  offers: [],
  sortType: sortTypes[0],
  validOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
  });
  builder.addCase(changeSortType, (state, action) => {
    state.sortType = action.payload;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
    state.isDataLoaded = true;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
