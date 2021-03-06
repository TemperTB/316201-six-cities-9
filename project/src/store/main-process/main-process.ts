import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SORT_TYPES, START_CITY} from '../../const';
import { MainProcess } from '../../types/state';

const initialState: MainProcess = {
  currentCity: START_CITY,
  isOffersLoaded: false,
  offers: [],
  sortType: SORT_TYPES[0],
};


export const mainProcess = createSlice({
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
    changeOffersLoadStatus: (state, action) => {
      state.isOffersLoaded = action.payload;
    },
  },
});

export const {loadOffers, changeCity, changeSortType, changeOffersLoadStatus} = mainProcess.actions;
