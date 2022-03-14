import { MAX_COUNT_REVIEWS } from './const';
import { OfferReviews } from './types/offer-reviews';
import { City, Offers } from './types/offers';
import { SortType } from './types/sort';

export const filterOffers = (offers: Offers, city: City): Offers => offers.filter((offer) => offer.city.name === city.name);

export const sortOffers = (offers: Offers, sortType: SortType): Offers => {
  switch (sortType) {
    case 'Popular':
      return offers;
    case 'Price: low to high':
      return offers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const sortingReviews = (arr: OfferReviews) => {
  if (arr.length < 2) {
    return arr;
  }
  const newArr = arr.slice();
  return newArr.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
};

export const limitingReviews = (arr: OfferReviews) => {
  if (arr.length > 10) {
    return arr.slice(0, MAX_COUNT_REVIEWS);
  }
  return arr;
};
