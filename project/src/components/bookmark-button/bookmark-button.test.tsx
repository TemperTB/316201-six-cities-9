
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

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const cb: any = jest.fn();
    const isFavorite = false;
    const id = 1;
    const handleButtonClick = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(handleButtonClick);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BookmarkButton isFavorite={isFavorite} id={id} cb={cb} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass(
      'place-card__bookmark-button button',
    );

    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole('button'));
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});

