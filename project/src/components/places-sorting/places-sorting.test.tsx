import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
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

  // it('Проверка работы кнопки', () => {

  //   const handleItemClick = jest.fn();
  //   const useDispatch = jest.spyOn(Redux, 'useDispatch');
  //   useDispatch.mockReturnValue(handleItemClick);

  //   render(fakeApp);

  //   const item = screen.getByTestId('places-sorting-span');
  //   expect(handleItemClick).toHaveBeenCalledTimes(0);
  //   userEvent.click(item);
  //   expect(handleItemClick).toHaveBeenCalledTimes(1);
  // });
  //TODO доделать
});
