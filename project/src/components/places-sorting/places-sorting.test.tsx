import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import { SORT_TYPES } from '../../const';
import PlacesSorting from './places-sorting';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <PlacesSorting sortType={SORT_TYPES[0]} />
    </HistoryRouter>
  </Provider>
);

describe('Component: LoginLocations', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('places-sorting');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('places__sorting');
  });

  it('Проверка работы кнопки', () => {

    const handleSpanClick = jest.fn();

    render(fakeApp);

    const item = screen.getByTestId('places-sorting-span');
    expect(item).toBeInTheDocument();
    const ul = screen.getByTestId('places-options');
    expect(ul).toBeInTheDocument();
    expect(ul).toHaveClass('places__options');
    expect(ul).toHaveClass('places__options--closed');
    expect(ul).not.toHaveClass('places__options--opened');
    expect(handleSpanClick).toHaveBeenCalledTimes(0);
    userEvent.click(item);
    expect(ul).not.toHaveClass('places__options--closed');
    expect(ul).toHaveClass('places__options--opened');
    userEvent.click(item);
    expect(ul).toHaveClass('places__options--closed');
    expect(ul).not.toHaveClass('places__options--opened');

  });

  // it('Проверка работы кнопки', () => {

  //   const handleSpanClick = jest.fn();

  //   render(fakeApp);

  //   const item = screen.getByTestId('places-sorting-span');
  //   expect(item).toBeInTheDocument();
  //   expect(item).toHaveClass('places__sorting-type');
  //   userEvent.click(item);
  //   expect(handleSpanClick).toBeCalled();

  // });
  //TODO задать вопрос
});
