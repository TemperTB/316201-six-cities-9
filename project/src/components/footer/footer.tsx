import { LogoTypes } from '../../const';
import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo type={LogoTypes.Footer}/>
    </footer>
  );
}

export default Footer;
