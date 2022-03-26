import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as Redux from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import { sortTypes } from '../../const';
import PlacesSortingOption from './places-sorting-option';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

describe('Component: PlacesSortingOption', () => {
  it('Правильная отрисовка активного элемента', () => {
    const mockFunction = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlacesSortingOption
            activeOption={sortTypes[0]}
            option={sortTypes[0]}
            onPlacesOptionClick={mockFunction}
          />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('places-sorting-option');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('places__option');
    expect(item).toHaveClass('places__option--active');
  });

  it('Правильная отрисовка НЕ активного элемента', () => {
    const mockFunction = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlacesSortingOption
            activeOption={sortTypes[0]}
            option={sortTypes[1]}
            onPlacesOptionClick={mockFunction}
          />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('places-sorting-option');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('places__option');
    expect(item).not.toHaveClass('places__option--active');
  });

  it('Проверка работы кнопки', () => {
    const mockFunction = jest.fn();
    const onItemClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(onItemClick);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlacesSortingOption
            activeOption={sortTypes[0]}
            option={sortTypes[0]}
            onPlacesOptionClick={mockFunction}
          />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('places-sorting-option');
    expect(onItemClick).toHaveBeenCalledTimes(0);
    userEvent.click(item);
    expect(onItemClick).toHaveBeenCalledTimes(1);
  });
});
