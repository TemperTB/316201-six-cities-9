import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import FavoriteScreenEmpty from './favorite-screen-empty';

//TODO переделать под общий вид
describe('Component: FavoriteScreenEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <FavoriteScreenEmpty />
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('Nothing yet saved.');
    const paragraphElement = screen.getByText(
      'Save properties to narrow down search or plan your future trips.',
    );

    expect(headerElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
