import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { LogoTypes } from '../../const';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';

const history = createMemoryHistory();


describe('Component: Logo', () => {
  it('Правильная отрисовка Logo в Header', () => {
    render(
      <HistoryRouter history={history}>
        <Logo type = {LogoTypes.Header}/>
      </HistoryRouter>,
    );

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('header__logo-link');
  });

  it('Правильная отрисовка Logo в Footer', () => {
    render(
      <HistoryRouter history={history}>
        <Logo type = {LogoTypes.Footer}/>
      </HistoryRouter>,
    );

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('footer__logo-link');
  });

});
