import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRouteNoAuth from './private-route-no-auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('Если пользователь авторизован - переводит на /main', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<h1>Вы уже авторизованы</h1>}
            />
            <Route
              path="/private"
              element={
                <PrivateRouteNoAuth>
                  <h1>Экран авторизации</h1>
                </PrivateRouteNoAuth>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Вы уже авторизованы')).toBeInTheDocument();
    expect(screen.queryByText('Экран авторизации')).not.toBeInTheDocument();
  });

  it('Если пользователь НЕ авторизован - переводит на /login', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<h1>Вы уже авторизованы</h1>}
            />
            <Route
              path="/private"
              element={
                <PrivateRouteNoAuth>
                  <h1>Экран авторизации</h1>
                </PrivateRouteNoAuth>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Экран авторизации')).toBeInTheDocument();
    expect(screen.queryByText('Вы уже авторизованы')).not.toBeInTheDocument();
  });
});
