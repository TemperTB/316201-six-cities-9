import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { MOCK_CITY, MOCK_FAVORITE } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import FavoriteItem from './favorite-item';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
});
const history = createMemoryHistory();
const city = MOCK_CITY;
const favorites = MOCK_FAVORITE;
const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <FavoriteItem city={city} validFavoritesOffers={favorites} />
    </HistoryRouter>
  </Provider>
);

describe('Component: FavoriteItem', () => {
  it('Правильная отрисовка', () => {

    render(fakeApp);

    const item = screen.getByTestId('locations__link');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('locations__item-link');
  });

  it('Проверка работы кнопки', () => {
    const changeCity = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(changeCity);

    render(fakeApp);

    const item = screen.getByTestId('locations__link');
    expect(changeCity).toHaveBeenCalledTimes(0);
    userEvent.click(item);
    expect(changeCity).toHaveBeenCalledTimes(1);
  });
});

