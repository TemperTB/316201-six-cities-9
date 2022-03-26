import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import OfferReviewsItem from './offer-reviews-item';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <OfferReviewsItem review={MOCK_REVIEWS[0]} />
    </HistoryRouter>
  </Provider>
);

describe('Component: OfferReviewsItem', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const item = screen.getByTestId('offer-reviews-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('reviews__item');
  });
});
