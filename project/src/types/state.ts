import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { NearbyOffers } from './nearby-offers.js';
import { OfferReviews } from './offer-reviews.js';
import { City, Offer, Offers } from './offers.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type MainProcess = {
  currentCity: City,
  isOffersLoaded: boolean,
  offers: Offers,
  sortType: string,
};

export type OfferProcess = {
  isNearbyOffersLoaded: boolean,
  isOfferLoaded: boolean,
  isOfferReviewsLoaded: boolean,
  nearbyOffers: NearbyOffers,
  offer: Offer,
  reviews: OfferReviews,
}
