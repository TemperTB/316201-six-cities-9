import { MOCK_OFFERS } from '../../mock';
import { favoriteProcess, loadFavoriteOffers } from './favorite-process';

describe('Reducer: favoriteProcess', () => {
  it('Без каких-либо параметров - вернет первоначальное состояние', () => {
    expect(favoriteProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({isFavoriteOffersLoaded: false, favoriteOffers: []});
  });

  it('loadFavoriteOffers - поменяет state.favoriteOffers и isOffersLoaded = true', () => {
    const state = {isFavoriteOffersLoaded: false, favoriteOffers: []};
    expect(favoriteProcess.reducer(state, loadFavoriteOffers(MOCK_OFFERS)))
      .toEqual({isFavoriteOffersLoaded: true, favoriteOffers: MOCK_OFFERS});
  });

});
