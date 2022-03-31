
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-route/history-route';
import BookmarkButton from './bookmark-button';
import * as Redux from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth }});
const history = createMemoryHistory();

const cb: any = jest.fn();
const id = 1;

describe('Component: BookmarkButton', () => {
  it('Правильная отрисовка избранной карточки', () => {
    const handleButtonClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleButtonClick);

    const isFavorite = true;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BookmarkButton isFavorite={isFavorite} id={id} cb={cb} />
        </HistoryRouter>
      </Provider>);

    const item = screen.getByTestId('bookmark-button');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('place-card__bookmark-button');
    expect(item).toHaveClass('place-card__bookmark-button--active');
  });

  it('Правильная отрисовка НЕ избранной карточки', () => {

    const isFavorite = false;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BookmarkButton isFavorite={isFavorite} id={id} cb={cb} />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('bookmark-button');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('place-card__bookmark-button');
    expect(item).not.toHaveClass('place-card__bookmark-button--active');
  });

  it('Проверка работы кнопки', () => {
    const handleButtonClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleButtonClick);

    const isFavorite = true;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BookmarkButton isFavorite={isFavorite} id={id} cb={cb} />
        </HistoryRouter>
      </Provider>,
    );

    const button = screen.getByTestId('bookmark-button');
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    userEvent.click(button);
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});

