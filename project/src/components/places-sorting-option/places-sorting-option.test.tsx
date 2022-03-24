import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import PlacesSortingOption from './places-sorting-option';


const mockStore = configureMockStore();

describe('Component: PlacesSortingOption', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const onPlacesOptionClick = jest.fn();
    const option = 'Test option';

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <PlacesSortingOption
            activeOption={option}
            option={option}
            onPlacesOptionClick={onPlacesOptionClick}
          />
        </HistoryRouter>
      </Provider>,
    );

    const item = screen.getByText(option);

    expect(item).toBeInTheDocument();

  });
});

//TODO test click
