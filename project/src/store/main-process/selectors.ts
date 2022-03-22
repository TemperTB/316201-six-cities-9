import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { City, Offers } from '../../types/offers';
import { createSelector } from 'reselect';
import { SortType } from '../../types/sort';
import { filterOffers, sortOffers } from '../../utils';

export const getCurrentCity = (state: State): City => state[NameSpace.main].currentCity;
export const getLoadedOffersStatus= (state: State): boolean => state[NameSpace.main].isOffersLoaded;
export const getOffers = (state: State): Offers => state[NameSpace.main].offers;
export const getSortType = (state: State): string => state[NameSpace.main].sortType;


/**
 * Возвращает offers отфильтрованные через currentCity и отсортированные через sortType
 */
export const getValidOffers = createSelector(
  [ getOffers, getCurrentCity, getSortType ],
  (offers: Offers, currentCity: City, sortType: SortType): Offers => {
    const filteredOffers: Offers = filterOffers(offers, currentCity);
    const sortedOffers: Offers = sortOffers(filteredOffers, sortType);
    return sortedOffers;
  },
);
