import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import * as Redux from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import OfferReviewsForm from './offer-reviews-form';
import { MOCK_OFFERS } from '../../mock';

const mockStore = configureMockStore();
const store = mockStore({
  OFFER: {
    offer: MOCK_OFFERS[0],
  },
});
const history = createMemoryHistory();

describe('Component: OfferReviewsForm', () => {
  it('Правильная отрисовка', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferReviewsForm />
        </HistoryRouter>
      </Provider>,
    );

    const form = screen.getByTestId('offer-reviews-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveClass('reviews__form');
  });

  it('Выбор рейтинга и заполнение текста комментария', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferReviewsForm />
        </HistoryRouter>
      </Provider>,
    );

    const comment = screen.getByTestId('comment');
    const inputRating = screen.getByTestId('input-rating');
    const labelRating = screen.getByTestId('label-rating');
    expect(comment).toBeInTheDocument();
    expect(inputRating).toBeInTheDocument();
    expect(labelRating).toBeInTheDocument();

    userEvent.type(screen.getByTestId('comment'), 'Комментарий');
    userEvent.click(labelRating);
    expect(screen.getByDisplayValue(/Комментарий/i)).toBeInTheDocument();
    expect(inputRating).toBeChecked();
  });

  it('Отправка формы', async() => {
    const handleFormSubmit = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleFormSubmit);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferReviewsForm />
        </HistoryRouter>
      </Provider>,
    );


    expect(handleFormSubmit).toHaveBeenCalledTimes(0);
    userEvent.type(screen.getByTestId('comment'), 'Этот комментарий точно состоит из 50 символов, можете даже не сомневаться в этом.');
    const labelRating = screen.getByTestId('label-rating');
    userEvent.click(labelRating);
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalledTimes(1);
    });

  });
});
