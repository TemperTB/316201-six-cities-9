import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus, SORT_TYPES } from '../../const';
import { MOCK_CITY, MOCK_OFFERS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import MainScreen from './main-screen';

const mockStore = configureMockStore();
const history = createMemoryHistory();


describe('Component: MainScreen', () => {
  it('Правильная отрисовка, когда данные загружены', () => {

    const store = mockStore({
      MAIN: {
        currentCity: MOCK_CITY,
        isOffersLoaded: true,
        offers: MOCK_OFFERS,
        sortType: SORT_TYPES[0],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('main-screen');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main page__main--index');
    expect(screen.getByTestId('cities')).toBeInTheDocument();
  });

  it('Правильная отрисовка, когда данные НЕ загружены', () => {
    const store = mockStore({
      MAIN: {
        currentCity: MOCK_CITY,
        isOffersLoaded: false,
        offers: MOCK_OFFERS,
        sortType: SORT_TYPES[0],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreen />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('main-screen');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main page__main--index');
    expect(screen.getByTestId('loading-screen')).toBeInTheDocument();
  });

});
