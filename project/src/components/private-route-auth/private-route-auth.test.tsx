import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRouteAuth from './private-route-auth';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('Если пользователь авторизован - переводит на childer', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Login} element={<h1>Доступа нет - залогиньтесь</h1>} />
            <Route
              path="/private"
              element={
                <PrivateRouteAuth>
                  <h1>Доступ есть</h1>
                </PrivateRouteAuth>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Доступ есть')).toBeInTheDocument();
    expect(
      screen.queryByText('Доступа нет - залогиньтесь'),
    ).not.toBeInTheDocument();
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
              path={AppRoute.Login}
              element={<h1>Доступа нет - залогиньтесь</h1>}
            />
            <Route
              path="/private"
              element={
                <PrivateRouteAuth>
                  <h1>Доступ есть</h1>
                </PrivateRouteAuth>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Доступа нет - залогиньтесь')).toBeInTheDocument();
    expect(
      screen.queryByText('Доступа есть'),
    ).not.toBeInTheDocument();
  });

});
