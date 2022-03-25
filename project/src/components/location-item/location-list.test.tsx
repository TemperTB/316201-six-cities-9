import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_CITY } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import LocationItem from './location-item';
import { City } from '../../types/offers';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();
const city = MOCK_CITY;


describe('Component: LocationItem', () => {
  it('Правильная отрисовка текущего города', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationItem city={city} activeCity={city} />
        </HistoryRouter>
      </Provider>);

    const item = screen.getByTestId('location-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('locations__item');
    const link = screen.getByTestId('location-item-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('tabs__item--active');

  });

  it('Правильная отрисовка НЕ текущего города', () => {

    const otherCity: City = Object.assign({}, city);
    otherCity.name = 'Moscow';

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationItem city={city} activeCity={otherCity} />
        </HistoryRouter>
      </Provider>);

    const item = screen.getByTestId('location-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('locations__item');
    const link = screen.getByTestId('location-item-link');
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveClass('tabs__item--active');
  });

  it('Проверка работы кнопки', () => {
    const handleLinkClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleLinkClick);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationItem city={city} activeCity={city} />
        </HistoryRouter>
      </Provider>,
    );

    const link = screen.getByTestId('location-item-link');
    expect(handleLinkClick).toHaveBeenCalledTimes(0);
    userEvent.click(link);
    expect(handleLinkClick).toHaveBeenCalledTimes(1);
  });

});
