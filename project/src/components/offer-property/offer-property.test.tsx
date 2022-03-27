import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_NEARBY_OFFERS, MOCK_OFFERS, MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import OfferProperty from './offer-property';
import { AuthorizationStatus } from '../../const';

const history = createMemoryHistory();

describe('Component: LoginLocations', () => {
  it('Правильная отрисовка при полной загрузке', () => {

    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        isNearbyOffersLoaded: true,
        isOfferLoaded: true,
        isOfferReviewsLoaded: true,
        isNea: true,
        nearbyOffers: MOCK_NEARBY_OFFERS,
        offer: MOCK_OFFERS[0],
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferProperty />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('offer-property');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('property');
    const reviews = screen.getByTestId('offer-reviews');
    expect(reviews).toBeInTheDocument();
    const map = screen.getByTestId('map');
    expect(map).toBeInTheDocument();
  });

  it('Если offer не загружен - карта не отрисовывается', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        isOfferLoaded: false,
        isOfferReviewsLoaded: true,
        isNea: true,
        nearbyOffers: MOCK_NEARBY_OFFERS,
        offer: MOCK_OFFERS[0],
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferProperty />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('offer-property');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('property');
    expect(screen.queryByTestId('map')).not.toBeInTheDocument();
  });

  it('Если offerReviews не загружены - отзывы не отрисовываются', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        isNea: true,
        nearbyOffers: MOCK_NEARBY_OFFERS,
        offer: MOCK_OFFERS[0],
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferProperty />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('offer-property');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('property');
    expect(screen.queryByTestId('offer-reviews')).not.toBeInTheDocument();

  });

  it('Проверка работы кнопки "избранное"', () => {
    const handlerButtonClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handlerButtonClick);

    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        isOfferLoaded: false,
        isOfferReviewsLoaded: false,
        isNea: true,
        nearbyOffers: MOCK_NEARBY_OFFERS,
        offer: MOCK_OFFERS[0],
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferProperty />
        </HistoryRouter>
      </Provider>
    );

    const button = screen.getByTestId('property-bookmark-button');
    expect(handlerButtonClick).toHaveBeenCalledTimes(0);
    userEvent.click(button);
    expect(handlerButtonClick).toHaveBeenCalledTimes(1);
  });

});
