import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferProcess } from '../../types/state';

/**
 * Пустой объект для начального состояния offer-process
 */
export const START_OFFER = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 10,
    },
  },
  previewImage: '',
  images: [],
  title: '',
  isFavorite: false,
  isPremium: false,
  rating: 0,
  type: '',
  bedrooms: 0,
  maxAdults: 0,
  price: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: '',
  },
  description: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 10,
  },
  id: 100500,
};

const initialState: OfferProcess = {
  isNearbyOffersLoaded: false,
  isOfferLoaded: false,
  isOfferReviewsLoaded: false,
  nearbyOffers: [],
  offer: START_OFFER,
  reviews: [],
};


export const offerProcess = createSlice({
  name: NameSpace.offer,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.offer = action.payload;
      state.isOfferLoaded = true;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoaded = true;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isOfferReviewsLoaded = true;
    },
    resetNearbyOffers: (state) => {
      state.isNearbyOffersLoaded = false;
    },
  },
});

export const {loadOffer, loadNearbyOffers, loadReviews, resetNearbyOffers} = offerProcess.actions;
