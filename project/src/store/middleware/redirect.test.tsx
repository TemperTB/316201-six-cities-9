import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from 'redux';
import { redirect } from './redirect';
import { redirectToRoute } from '../action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';

const fakeHistory = {
  location: { pathname: '' },
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /main', () => {
    store.dispatch(redirectToRoute(AppRoute.Main));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Main);
    expect(store.getActions()).toEqual([redirectToRoute(AppRoute.Main)]);
  });

  it('should be redirect /not-found', () => {
    store.dispatch(redirectToRoute(AppRoute.NotFound));
    expect(fakeHistory.location.pathname).toBe(AppRoute.NotFound);
  });
});
