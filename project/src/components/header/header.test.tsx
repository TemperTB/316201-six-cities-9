import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-route/history-route';
import Header from './header';

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

describe('Component: Header', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('header');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('header');
  });
});
