import { APIRoute, AUTH_TOKEN_KEY_NAME } from '../const';
import { MOCK_OFFERS } from '../mock';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { checkAuthAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction, fetchSendReview, loginAction, logoutAction } from './api-actions';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { loadOffers } from './main-process/main-process';
import { Action } from '@reduxjs/toolkit';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { loadOffer, loadNearbyOffers, loadReviews } from './offer-process/offer-process';
import { loadFavoriteOffers } from './favorite-process/favorite-process';
import { requireAuthorization } from './user-process/user-process';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('GET /hotels должен вызвать dispatch(loadOffers)', async () => {
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, MOCK_OFFERS);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadOffers.toString());
  });

  it('GET /hotels/1 должен вызвать dispatch(loadOffer)', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Offers}/1`)
      .reply(200, MOCK_OFFERS[0]);

    const store = mockStore();
    await store.dispatch(fetchOfferAction(id));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadOffer.toString());
  });

  it('GET /hotels/1/nearby должен вызвать dispatch(loadNearbyOffers)', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`)
      .reply(200, MOCK_OFFERS[0]);

    const store = mockStore();
    await store.dispatch(fetchNearbyOffersAction(id));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadNearbyOffers.toString());
  });

  it('GET /comments/1 должен вызвать dispatch(loadReviews)', async () => {
    const id = '1';
    mockAPI
      .onGet(`${APIRoute.Comments}/${id}`)
      .reply(200, MOCK_OFFERS[0]);

    const store = mockStore();
    await store.dispatch(fetchReviewsAction(id));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadReviews.toString());
  });

  it('POST /comments/1 должен вызвать dispatch(loadReviews)', async () => {
    const id = 1;
    const comment = 'В этот отель я никогда не ездил, а комментарий написал для теста';
    const rating = 2;
    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`)
      .reply(200, MOCK_OFFERS[0]);

    const store = mockStore();
    await store.dispatch(fetchSendReview({id, comment, rating}));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadReviews.toString());
  });

  it('GET /favorite должен вызвать dispatch(loadFavoriteOffers)', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, MOCK_OFFERS);

    const store = mockStore();
    await store.dispatch(fetchFavoriteOffersAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadFavoriteOffers.toString());
  });

  it('POST /favorite должен вызвать dispatch(loadFavoriteOffers)', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, MOCK_OFFERS);

    const store = mockStore();
    await store.dispatch(fetchFavoriteOffersAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadFavoriteOffers.toString());
  });

  it('GET /login должен вызвать dispatch(requireAuthorization)', async () => {
    const storeOne = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(storeOne.getActions()).toEqual([]);
    await storeOne.dispatch(checkAuthAction());
    const actionsOne = storeOne.getActions().map(({type}) => type);
    expect(actionsOne).toContain(requireAuthorization.toString());

    const storeTwo = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(401, []);

    expect(storeTwo.getActions()).toEqual([]);
    await storeTwo.dispatch(checkAuthAction());
    const actionsTwo = storeTwo.getActions().map(({type}) => type);
    expect(actionsTwo).toContain(requireAuthorization.toString());
  });

  it('POST /login должен вызвать dispatch(requireAuthorization), сохранить токен', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
    expect(actions).toContain(redirectToRoute.toString());
    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'secret');
  });

  it('DELETE /logout должен вызвать dispatch(requireAuthorization), удалить токен', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });

});
