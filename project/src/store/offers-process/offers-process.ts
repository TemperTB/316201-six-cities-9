import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, sortTypes, START_CITY} from '../../const';
import { Offers } from '../../types/offers';
import { MainProcess } from '../../types/state';
import { filterOffers, sortOffers } from '../../utils';

const initialState: MainProcess = {
  currentCity: START_CITY,
  isOffersLoaded: false,
  offers: [],
  sortType: sortTypes[0],
  validOffers: [],
};


export const offersProcess = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
      const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
      state.validOffers = sortedOffers;
      state.isOffersLoaded = true;
    },
    changeCity: (state, action) => {
      if (state.currentCity.name !== action.payload.name) {
        state.currentCity = action.payload;
        const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
        const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
        state.validOffers = sortedOffers;
      }
    },
    changeSortType: (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
        const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
        const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
        state.validOffers = sortedOffers;
      }
    },
  },
});

export const {loadOffers, changeCity, changeSortType} = offersProcess.actions;
