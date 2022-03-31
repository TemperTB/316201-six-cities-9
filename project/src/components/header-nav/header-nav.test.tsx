import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import Header from '../header/header';
import HistoryRouter from '../history-route/history-route';
import * as Redux from 'react-redux';

describe('Component: HeaderNav', () => {
  it('Правильная отрисовка авторизованного пользователя', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });
    const history = createMemoryHistory();

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    render(fakeApp);

    const headerNav = screen.getByTestId('header_nav');
    expect(headerNav).toBeInTheDocument();
    expect(headerNav).toHaveClass('header__nav');
    const userName = screen.getByTestId('header-user-name');
    expect(userName).toBeInTheDocument();
    expect(userName).toHaveClass('header__user-name');
    const signOut = screen.getByTestId('header-signout');
    expect(signOut).toBeInTheDocument();
    expect(signOut).toHaveClass('header__nav-link');
  });

  it('Проверка работы кнопки Sign out', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });
    const history = createMemoryHistory();
    const logoutAction = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(logoutAction);

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    render(fakeApp);

    const signOut = screen.getByTestId('header-signout');
    expect(logoutAction).toHaveBeenCalledTimes(0);
    userEvent.click(signOut);
    expect(logoutAction).toHaveBeenCalledTimes(1);
  });

  it('Правильная отрисовка НЕ авторизованного пользователя', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
    });
    const history = createMemoryHistory();

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );

    render(fakeApp);

    const headerLogin = screen.getByTestId('header-login');
    expect(headerLogin).toBeInTheDocument();
    expect(headerLogin).toHaveClass('header__login');

  });
});
