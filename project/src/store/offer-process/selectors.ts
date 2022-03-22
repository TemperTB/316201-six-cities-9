import { NameSpace } from '../../const';
import { NearbyOffers } from '../../types/nearby-offers';
import { OfferReviews } from '../../types/offer-reviews';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getLoadNearbyStatus = (state: State): boolean => state[NameSpace.offer].isNearbyOffersLoaded;
export const getLoadOfferStatus = (state: State): boolean => state[NameSpace.offer].isOfferLoaded;
export const getLoadReviewsStatus = (state: State): boolean => state[NameSpace.offer].isOfferReviewsLoaded;
export const getNearbyOffers = (state: State): NearbyOffers => state[NameSpace.offer].nearbyOffers;
export const getOffer = (state: State): Offer => state[NameSpace.offer].offer;
export const getOfferReviews = (state: State): OfferReviews => state[NameSpace.offer].reviews;
