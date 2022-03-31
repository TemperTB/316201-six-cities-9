import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import MainScreenEmpty from './main-screen-empty';

const history = createMemoryHistory();

// Линтер ругается на то что DummyLocationsList не объявлена как стрелочная функция.
// Но если исправить, то будет ошибка
// Component definition is missing display name
// eslint-disable-next-line react/function-component-definition
jest.mock('../locations-list/locations-list', () => function DummyLocationsList() {
  return <div data-testid="locations-list"></div>;
});

const fakeApp = (
  <HistoryRouter history={history}>
    <MainScreenEmpty />
  </HistoryRouter>
);

describe('Component: MainScreenEmpty', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('main-screen-empty');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main--index-empty');
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
