import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_CITY, MOCK_OFFERS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import Cities from './cities';

const mockStore = configureMockStore();
const store = mockStore({
  MAIN: {
    currentCity: MOCK_CITY,
    isOffersLoaded: true,
    offers: MOCK_OFFERS,
  },
});
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Cities />
    </HistoryRouter>
  </Provider>
);

describe('Component: Cities', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('places-card');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('cities__places-list');

  });
});
