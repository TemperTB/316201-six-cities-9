import { MOCK_OFFERS } from './mock';
import { filterOffers, sortOffers } from './utils';

describe('Utils', () => {
  it('Работа функции filterOffers', () => {

    const offers = [MOCK_OFFERS[0], MOCK_OFFERS[1], MOCK_OFFERS[0], MOCK_OFFERS[1]];
    expect(filterOffers(offers, MOCK_OFFERS[0].city)).toStrictEqual([MOCK_OFFERS[0], MOCK_OFFERS[0]]);
    expect(filterOffers(offers, MOCK_OFFERS[1].city)).not.toStrictEqual([MOCK_OFFERS[0], MOCK_OFFERS[0]]);
  });

  it('Работа функции sortOffers', () => {

    const offers = [MOCK_OFFERS[0], MOCK_OFFERS[1], MOCK_OFFERS[2], MOCK_OFFERS[3]];
    expect(sortOffers(offers, 'Popular')).toStrictEqual(offers);
    expect(sortOffers(offers, 'Price: low to high')).toStrictEqual([MOCK_OFFERS[1], MOCK_OFFERS[3], MOCK_OFFERS[2], MOCK_OFFERS[0]]);
    expect(sortOffers(offers, 'Price: high to low')).toStrictEqual([MOCK_OFFERS[0], MOCK_OFFERS[2], MOCK_OFFERS[3], MOCK_OFFERS[1]]);
    expect(sortOffers(offers, 'Top rated first')).toStrictEqual([MOCK_OFFERS[2], MOCK_OFFERS[0], MOCK_OFFERS[3], MOCK_OFFERS[1]]);
  });

});
