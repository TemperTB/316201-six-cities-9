import { CITIES, sortTypes, START_CITY } from '../../const';
import { MOCK_OFFERS } from '../../mock';
import { changeCity, changeOffersLoadStatus, changeSortType, loadOffers, mainProcess } from './main-process';

describe('Reducer: mainProcess', () => {
  it('Без каких-либо параметров - вернет первоначальное состояние', () => {
    expect(mainProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({currentCity: START_CITY, isOffersLoaded: false, offers: [], sortType: sortTypes[0]});
  });

  it('loadOffers - поменяет state.offers и isOffersLoaded = true', () => {
    const state = {currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]};
    expect(mainProcess.reducer(state, loadOffers(MOCK_OFFERS)))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: true, offers: MOCK_OFFERS, sortType: sortTypes[0]});
  });

  it('changeCity, если город изменился - поменяется state.changeCity', () => {
    const state = {currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]};

    expect(mainProcess.reducer(state, changeCity(CITIES[1])))
      .toEqual({currentCity: CITIES[1], isOffersLoaded: false, offers: [], sortType: sortTypes[0]});

    expect(mainProcess.reducer(state, changeCity(CITIES[0])))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]});
  });


  it('changeSortType, если тип сортировки изменился - поменяется state.sortType', () => {
    const state = {currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]};

    expect(mainProcess.reducer(state, changeSortType(sortTypes[1])))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[1]});

    expect(mainProcess.reducer(state, changeSortType(sortTypes[0])))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]});
  });

  it('changeOffersLoadStatus - поменяет isOffersLoaded на переданное значение', () => {
    const stateFalse = {currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]};

    expect(mainProcess.reducer(stateFalse, changeOffersLoadStatus(true)))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: true, offers: [], sortType: sortTypes[0]});

    expect(mainProcess.reducer(stateFalse, changeOffersLoadStatus(false)))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]});

    const stateTrue = {currentCity: CITIES[0], isOffersLoaded: true, offers: [], sortType: sortTypes[0]};

    expect(mainProcess.reducer(stateTrue, changeOffersLoadStatus(true)))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: true, offers: [], sortType: sortTypes[0]});

    expect(mainProcess.reducer(stateTrue, changeOffersLoadStatus(false)))
      .toEqual({currentCity: CITIES[0], isOffersLoaded: false, offers: [], sortType: sortTypes[0]});

  });


});
