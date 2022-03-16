import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, sortTypes, START_CITY} from '../../const';
import { MainProcess } from '../../types/state';

const initialState: MainProcess = {
  currentCity: START_CITY,
  isOffersLoaded: false,
  offers: [],
  sortType: sortTypes[0],
};


export const offersProcess = createSlice({
  name: NameSpace.main,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    },
    changeCity: (state, action) => {
      if (state.currentCity.name !== action.payload.name) {
        state.currentCity = action.payload;
      }
    },
    changeSortType: (state, action) => {
      if (state.sortType !== action.payload) {
        state.sortType = action.payload;
      }
    },
  },
});

export const {loadOffers, changeCity, changeSortType} = offersProcess.actions;
