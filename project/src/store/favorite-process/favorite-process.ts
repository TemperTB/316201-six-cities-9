import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/state';


const initialState: FavoriteProcess = {
  isFavoriteOffersLoaded: false,
  favoriteOffers: [],
};


export const favoriteProcess = createSlice({
  name: NameSpace.favorite,
  initialState,
  reducers: {
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoaded = true;
    },
  },
});

export const {loadFavoriteOffers} = favoriteProcess.actions;
