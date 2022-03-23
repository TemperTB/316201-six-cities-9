import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import { AppRoute, AuthorizationStatus, CITIES, sortTypes } from '../../const';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { MOCK_OFFERS } from '../../mock';


const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  MAIN: {
    currentCity: CITIES[0],
    offers: MOCK_OFFERS,
    isOffersLoaded: true,
    sortType: sortTypes[0],
  },
  OFFER: {
    isOfferLoaded: true,
    isNearbyOffersLoaded: true,
    isOfferReviewsLoaded: true,
    offer: MOCK_OFFERS[0],
    nearbyOffers: [],
    reviews: [],
  },
  FAVORITE: { isFavoriteOffersLoaded: true, favoriteOffers: MOCK_OFFERS },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('При "/" будет показывать главный экран (main-page)', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    // expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
  });

  it('При "/login" будет показывать главный экран если пользователь авторизован (main-page)', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    // expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
  });

  // it('При "/offer/1" будет показывать экран предложения (offer-page)', () => {
  //   history.push(`${AppRoute.Offer}1`);

  //   render(fakeApp);

  //   // expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Max/i)).toBeInTheDocument();
  //   expect(screen.getByText(/night/i)).toBeInTheDocument();
  //   expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  // });

  // it('При "/favorite" будет показывать экран избранное если пользователь авторизован (favorite-page)', () => {
  //   history.push(AppRoute.Favorites);

  //   render(fakeApp);

  //   expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  // });

  it('Когда маршрут неизвестен должен показать экран 404 "NotFound"', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });

});
