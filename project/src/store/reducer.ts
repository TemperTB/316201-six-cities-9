import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, sendReview } from './action';
import { AuthorizationStatus, sortTypes, START_CITY } from '../const';
import { filterOffers, sortOffers } from '../utils';
import { City, Offer, Offers } from '../types/offers';
import { NearbyOffers } from '../types/nearby-offers';
import { OfferReviews } from '../types/offer-reviews';

type InitalState = {
  authorizationStatus: AuthorizationStatus,
  currentCity: City,
  isNearbyOffersLoaded: boolean,
  isOfferLoaded: boolean,
  isOffersLoaded: boolean,
  nearbyOffers: NearbyOffers,
  offer: Offer,
  offers: Offers,
  reviews: OfferReviews,
  sortType: string,
  validOffers: Offers,
}

const initialState: InitalState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentCity: START_CITY,
  isNearbyOffersLoaded: false,
  isOfferLoaded: false,
  isOffersLoaded: false,
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
  offers: [],
  reviews: [],
  sortType: sortTypes[0],
  validOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    if (state.currentCity.name !== action.payload.name) {
      state.currentCity = action.payload;
      const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
      const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
      state.validOffers = sortedOffers;
    }
  });
  builder.addCase(changeSortType, (state, action) => {
    if (state.sortType !== action.payload) {
      state.sortType = action.payload;
      const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
      const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
      state.validOffers = sortedOffers;
    }
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    const filteredOffers: Offers = filterOffers(state.offers, state.currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, state.sortType);
    state.validOffers = sortedOffers;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
    state.isOfferLoaded = true;
  });
  builder.addCase(loadNearbyOffers, (state, action) => {
    state.nearbyOffers = action.payload;
    state.isNearbyOffersLoaded = true;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(sendReview, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export { reducer };
