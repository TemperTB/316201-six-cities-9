import { LogoTypes } from '../../const';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

function Header(): JSX.Element {

  return (
    <header className="header" data-testid="header">
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
