import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { MOCK_FAVORITE } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import FavoriteScreen from './favorite-screen';

const mockStore = configureMockStore();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  FAVORITE: { favoriteOffers: MOCK_FAVORITE },
});
const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <FavoriteScreen/>
    </HistoryRouter>
  </Provider>
);

describe('Component: FavoriteScreen', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('favorite-screen');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main--favorites');
  });

});
