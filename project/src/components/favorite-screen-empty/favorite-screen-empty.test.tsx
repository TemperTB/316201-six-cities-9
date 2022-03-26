import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import FavoriteScreenEmpty from './favorite-screen-empty';

const history = createMemoryHistory();

const fakeApp = (
  <HistoryRouter history={history}>
    <FavoriteScreenEmpty/>
  </HistoryRouter>
);

describe('Component: FavoriteScreenEmpty', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('favorite-screen-empty');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main--favorites-empty');
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  });
});
