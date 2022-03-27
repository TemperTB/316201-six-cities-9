import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import OfferReviews from './offer-reviews';

// Линтер ругается на то что DummyOfferReviewsForm не объявлена как стрелочная функция.
// Но если исправить, то будет ошибка
// Component definition is missing display name
jest.mock(
  '../offer-reviews-form/offer-reviews-form',
  () =>
    // eslint-disable-next-line react/function-component-definition
    function DummyOfferReviewsForm() {
      return <div>This is Reviews Form</div>;
    },
);

describe('Component: OfferReviews', () => {

  it('Если пользователь авторизован - форма отрисуется', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferReviews />
        </HistoryRouter>
      </Provider>);

    const item = screen.getByTestId('offer-reviews');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('property__reviews');
    expect(screen.getByText('This is Reviews Form')).toBeInTheDocument();

  });

  it('Если пользователь НЕ авторизован - форма НЕ отрисуется', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      OFFER: {
        reviews: MOCK_REVIEWS,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferReviews />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByTestId('offer-reviews');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('property__reviews');
    expect(screen.queryByText('This is Reviews Form')).not.toBeInTheDocument();
  });


});
