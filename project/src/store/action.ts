import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { NearbyOffers } from '../types/nearby-offers';
import { OfferReviews } from '../types/offer-reviews';
import { City, Offers, Offer } from '../types/offers';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<string>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadNearbyOffers = createAction<NearbyOffers>('data/loadNearbyOffers');
export const loadReviews = createAction<OfferReviews>('data/loadReviews');
export const sendReview = createAction<OfferReviews>('data/sendReview');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');
