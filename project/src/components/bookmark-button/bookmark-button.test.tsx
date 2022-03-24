
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import HistoryRouter from '../history-route/history-route';
import BookmarkButton from './bookmark-button';


const mockStore = configureMockStore();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth }});

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const cb = jest.fn();
    const isFavorite = false;
    const id = 1;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <BookmarkButton isFavorite={isFavorite} id={id} cb={cb} />
        </HistoryRouter>
      </Provider>,
    );

    const span = screen.getByText('To bookmarks');

    expect(span).toBeInTheDocument();
  });
});

//TODO test click
