import { MOCK_OFFERS } from '../../mock';
import { loadNearbyOffers, loadOffer, loadReviews, offerProcess, resetNearbyOffers, START_OFFER } from './offer-process';

describe('Reducer: offerProcess', () => {
  it('Без каких-либо параметров - вернет первоначальное состояние', () => {
    expect(offerProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        isNearbyOffersLoaded: false,
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        nearbyOffers: [],
        offer: START_OFFER,
        reviews: []});
  });

  it('loadOffer - поменяет state.offer и isOfferLoaded = true', () => {

    const state = {
      isNearbyOffersLoaded: false,
      isOfferLoaded: false,
      isOfferReviewsLoaded: false,
      nearbyOffers: [],
      offer: START_OFFER,
      reviews: []};

    expect(offerProcess.reducer(state, loadOffer(MOCK_OFFERS[0])))
      .toEqual({isNearbyOffersLoaded: false,
        isOfferLoaded: true,
        isOfferReviewsLoaded: false,
        nearbyOffers: [],
        offer: MOCK_OFFERS[0],
        reviews: []});

  });

  it('loadNearbyOffers - поменяет state.nearbyOffers и isNearbyOffersLoaded = true', () => {

    const state = {
      isNearbyOffersLoaded: false,
      isOfferLoaded: false,
      isOfferReviewsLoaded: false,
      nearbyOffers: [],
      offer: START_OFFER,
      reviews: []};

    expect(offerProcess.reducer(state, loadNearbyOffers(MOCK_OFFERS[0])))
      .toEqual({isNearbyOffersLoaded: true,
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        nearbyOffers: MOCK_OFFERS[0],
        offer: START_OFFER,
        reviews: []});

  });

  it('loadReviews - поменяет state.reviews и isOfferReviewsLoaded = true', () => {

    const state = {
      isNearbyOffersLoaded: false,
      isOfferLoaded: false,
      isOfferReviewsLoaded: false,
      nearbyOffers: [],
      offer: START_OFFER,
      reviews: []};

    expect(offerProcess.reducer(state, loadReviews(MOCK_OFFERS[0])))
      .toEqual({isNearbyOffersLoaded: false,
        isOfferLoaded: false,
        isOfferReviewsLoaded: true,
        nearbyOffers: [],
        offer: START_OFFER,
        reviews: MOCK_OFFERS[0]});

  });

  it('resetNearbyOffers - поменяет isNearbyOffersLoaded = false', () => {

    const stateTrue = {
      isNearbyOffersLoaded: true,
      isOfferLoaded: false,
      isOfferReviewsLoaded: false,
      nearbyOffers: [],
      offer: START_OFFER,
      reviews: []};

    expect(offerProcess.reducer(stateTrue, resetNearbyOffers()))
      .toEqual({isNearbyOffersLoaded: false,
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        nearbyOffers: [],
        offer: START_OFFER,
        reviews: []});

    const stateFalse = {
      isNearbyOffersLoaded: false,
      isOfferLoaded: false,
      isOfferReviewsLoaded: false,
      nearbyOffers: [],
      offer: START_OFFER,
      reviews: []};

    expect(offerProcess.reducer(stateFalse, resetNearbyOffers()))
      .toEqual({isNearbyOffersLoaded: false,
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        nearbyOffers: [],
        offer: START_OFFER,
        reviews: []});

  });

});
