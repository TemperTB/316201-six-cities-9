import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as Redux from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import LoginScreen from './login-screen';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

describe('Component: LoginScreen', () => {
  it('Правильная отрисовка', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginScreen/>
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('login-screen');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main--login');
  });

  it('Заполнение логина и пароля', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>,
    );

    const login = screen.getByTestId('login');
    const password = screen.getByTestId('password');
    expect(login).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'temper');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/temper/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

  });

  it('Отправка формы', () => {

    const handleFormSubmit = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleFormSubmit);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(handleFormSubmit).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByTestId('login'), 'temper@mail.ru');
    userEvent.type(screen.getByTestId('password'), '123456');
    userEvent.click(screen.getByRole('button'));
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });


});
