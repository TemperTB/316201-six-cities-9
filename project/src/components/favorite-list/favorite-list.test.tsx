import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { MOCK_FAVORITE } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import FavoriteList from './favorite-list';

const mockStore = configureMockStore();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  FAVORITE: { favoriteOffers: MOCK_FAVORITE },
});
const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <FavoriteList />
    </HistoryRouter>
  </Provider>
);

describe('Component: FavoriteList', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('favorite-list');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('favorites__list');
  });
});
