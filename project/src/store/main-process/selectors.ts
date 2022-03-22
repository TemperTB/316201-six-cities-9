import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { City, Offers } from '../../types/offers';

export const getCurrentCity = (state: State): City => state[NameSpace.main].currentCity;
export const getLoadedOffersStatus= (state: State): boolean => state[NameSpace.main].isOffersLoaded;
export const getOffers = (state: State): Offers => state[NameSpace.main].offers;
export const getSortType = (state: State): string => state[NameSpace.main].sortType;
