import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import Footer from './footer';


const history = createMemoryHistory();
const fakeApp = (
  <HistoryRouter history={history}>
    <Footer />
  </HistoryRouter>
);

describe('Component: Footer', () => {
  it('Правильная отрисовка', () => {
    render(fakeApp);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('footer');
  });

});
