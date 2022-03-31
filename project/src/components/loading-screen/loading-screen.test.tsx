import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import LoadingScreen from './loading-screen';

const history = createMemoryHistory();

const fakeApp = (
  <HistoryRouter history={history}>
    <LoadingScreen />
  </HistoryRouter>
);

describe('Component: LoadingScreen', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const loading = screen.getByTestId('loading-screen');
    expect(loading).toBeInTheDocument();
    expect(loading).toHaveClass('loading');
  });
});
