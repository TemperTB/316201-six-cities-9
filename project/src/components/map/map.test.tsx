import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_CITY, MOCK_OFFERS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import Map from '../map/map';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Map centerCoordinates={MOCK_CITY.location} points={MOCK_OFFERS} selectedPoint={MOCK_OFFERS[0]} height={500}/>
    </HistoryRouter>
  </Provider>
);

describe('Component: Map', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('map');
    expect(item).toBeInTheDocument();
  });

});
