import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_CITY } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import LoginLocations from './login-locations';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({
  MAIN: {
    currentCity: MOCK_CITY,
  },
});
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <LoginLocations />
    </HistoryRouter>
  </Provider>
);

describe('Component: LoginLocations', () => {

  it('Правильная отрисовка', () => {

    render(fakeApp);

    const item = screen.getByTestId('locations-login');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('locations--login');
  });

  it('Проверка работы кнопки', () => {
    const handleLinkClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleLinkClick);

    render(fakeApp);

    const link = screen.getByTestId('locations-login-link');
    expect(handleLinkClick).toHaveBeenCalledTimes(0);
    userEvent.click(link);
    expect(handleLinkClick).toHaveBeenCalledTimes(1);
  });
});
