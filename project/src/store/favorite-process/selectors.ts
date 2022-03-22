import { NameSpace } from '../../const';
import { FavoriteOffers } from '../../types/favorite-offers';
import { State } from '../../types/state';

export const getFavoriteLoadStatus = (state: State): boolean => state[NameSpace.favorite].isFavoriteOffersLoaded;
export const getFavoriteOffers = (state: State): FavoriteOffers => state[NameSpace.favorite].favoriteOffers;

