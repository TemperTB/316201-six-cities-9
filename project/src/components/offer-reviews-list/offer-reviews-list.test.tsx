import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import OfferReviewsList from './offer-reviews-list';


const mockStore = configureMockStore();
const store = mockStore({
  OFFER: {
    reviews: MOCK_REVIEWS,
  },
});
const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <OfferReviewsList/>
    </HistoryRouter>
  </Provider>
);

describe('Component: OfferReviewsList', () => {

  it('Правильная отрисовка', () => {

    render(fakeApp);

    const item = screen.getByTestId('reviews-list');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('reviews__list');
  });

});
