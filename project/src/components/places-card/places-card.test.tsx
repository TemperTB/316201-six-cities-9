import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus, PlaceCardTypes, SORT_TYPES } from '../../const';
import { MOCK_CITY, MOCK_OFFERS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import PlacesCard from './places-card';

const mockStore = configureMockStore();
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
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <PlacesCard typeCard={PlaceCardTypes.Main} offers={MOCK_OFFERS} />
    </HistoryRouter>
  </Provider>
);

describe('Component: PlacesCard', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('places-card');
    expect(item).toBeInTheDocument();
  });
});
