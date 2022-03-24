import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MOCK_REVIEWS } from '../../mock';
import HistoryRouter from '../history-route/history-route';
import OfferReviewsItem from './offer-reviews-item';

describe('Component: FavoriteScreenEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <OfferReviewsItem review={MOCK_REVIEWS[1]} />
      </HistoryRouter>,
    );

    const comment = screen.getByText(MOCK_REVIEWS[1].comment);
    const userName = screen.getByText(MOCK_REVIEWS[1].user.name);

    expect(comment).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });
});
