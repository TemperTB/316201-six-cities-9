import { LogoTypes } from '../../const';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  // eslint-disable-next-line no-console
  console.info('Header');
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type={LogoTypes.Header} />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
