import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { AppRoute, AuthorizationStatus, SORT_TYPES } from '../../const';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { MOCK_CITY, MOCK_FAVORITE, MOCK_NEARBY_OFFERS, MOCK_OFFERS, MOCK_REVIEWS } from '../../mock';
import * as Redux from 'react-redux';


const mockStore = configureMockStore();
const history = createMemoryHistory();


describe('Application Routing', () => {
  it('При "/" будет показывать главный экран (main-page)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
  });

  it('При "/login" будет показывать главный экран если пользователь авторизован (main-page)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('main-screen')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
  });

  it('При "/login" будет показывать экран авторизации если пользователь НЕ авторизован (login)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });

  it('При "/offer/1" будет показывать экран предложения (offer-page)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    const downloadData = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(downloadData);

    history.push(`${AppRoute.Offer}1`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('offer-screen')).toBeInTheDocument();
    expect(screen.getByTestId('offer-property')).toBeInTheDocument();
    expect(screen.getByTestId('offer-reviews')).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();

  });

  it('При "/favorite" будет показывать экран "Избранное" если пользователь авторизован (main-page)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    const downloadData = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(downloadData);

    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('favorite-screen')).toBeInTheDocument();
    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });

  it('При "/favorite" будет показывать экран авторизации если пользователь НЕ авторизован (login)', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });


  it('Когда маршрут неизвестен должен показать экран 404 "NotFound"', () => {

    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      MAIN: {
        currentCity: MOCK_CITY,
        offers: MOCK_OFFERS,
        isOffersLoaded: true,
        sortType: SORT_TYPES[0],
      },
      OFFER: {
        isOfferLoaded: true,
        isNearbyOffersLoaded: true,
        isOfferReviewsLoaded: true,
        offer: MOCK_OFFERS[0],
        nearbyOffers: MOCK_NEARBY_OFFERS,
        reviews: MOCK_REVIEWS,
      },
      FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_FAVORITE },
    });

    history.push('/non-existent-route');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
