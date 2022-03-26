import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_CITY } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import LocationsList from './locations-list';

const mockStore = configureMockStore();
const store = mockStore({
  MAIN: {
    currentCity: MOCK_CITY,
  },
},
);
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <LocationsList />
    </HistoryRouter>
  </Provider>
);

describe('Component: LocationsList', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('locations_list');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('locations__list');
  });


});
