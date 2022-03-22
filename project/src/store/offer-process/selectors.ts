import { createSelector } from 'reselect';
import { NameSpace } from '../../const';
import { NearbyOffers } from '../../types/nearby-offers';
import { OfferReviews } from '../../types/offer-reviews';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';
import { MAX_COUNT_REVIEWS } from '../../const';

export const getLoadNearbyStatus = (state: State): boolean => state[NameSpace.offer].isNearbyOffersLoaded;
export const getLoadOfferStatus = (state: State): boolean => state[NameSpace.offer].isOfferLoaded;
export const getLoadReviewsStatus = (state: State): boolean => state[NameSpace.offer].isOfferReviewsLoaded;
export const getNearbyOffers = (state: State): NearbyOffers => state[NameSpace.offer].nearbyOffers;
export const getOffer = (state: State): Offer => state[NameSpace.offer].offer;
export const getOfferReviews = (state: State): OfferReviews => state[NameSpace.offer].reviews;

/**
 * Возвращает комментарии для отрисовки (сортирует от раннего к позднему и ограничивает максимальным количеством)
 */
export const getValidOfferReviews = createSelector(
  [ getOfferReviews ],
  (reviews: OfferReviews): OfferReviews => {
    if (reviews.length < 2) {
      return reviews;
    }
    const validReviews = reviews.slice();
    validReviews.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
    if (validReviews.length > 10) {
      return validReviews.slice(0, MAX_COUNT_REVIEWS);
    }
    return validReviews;
  },
);
