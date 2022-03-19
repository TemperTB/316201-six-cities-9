import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferProcess } from '../../types/state';


const initialState: OfferProcess = {
  isNearbyOffersLoaded: false,
  isOfferLoaded: false,
  isOfferReviewsLoaded: false,
  nearbyOffers: [{
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
    description:
      '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 10,
    },
    id: 100500,
  }],
  offer: {
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
  },
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
    sendReview: (state, action) => {
      state.reviews = action.payload;
    },
    resetNearbyOffers: (state) => {
      state.isNearbyOffersLoaded = false;
    },
  },
});

export const {loadOffer, loadNearbyOffers, loadReviews, sendReview, resetNearbyOffers} = offerProcess.actions;
