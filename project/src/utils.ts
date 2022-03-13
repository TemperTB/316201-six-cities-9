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

