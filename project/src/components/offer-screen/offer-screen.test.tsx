import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { MOCK_NEARBY_OFFERS, MOCK_OFFERS, MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import OfferScreen from './offer-screen';

const mockStore = configureMockStore();
const store = mockStore({
  OFFER: {
    isNearbyOffersLoaded: true,
    isOfferLoaded: true,
    isOfferReviewsLoaded: true,
    nearbyOffers: MOCK_NEARBY_OFFERS,
    offer: MOCK_OFFERS[0],
    reviews: MOCK_REVIEWS,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
});
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <OfferScreen />
    </HistoryRouter>
  </Provider>
);

describe('Component: LoginLocations', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('offer-screen');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('page__main--property');
    expect(
      screen.getByText('Other places in the neighbourhood'),
    ).toBeInTheDocument();
  });

});
