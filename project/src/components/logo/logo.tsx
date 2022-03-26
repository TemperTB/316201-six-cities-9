import { Link } from 'react-router-dom';
import { LogoTypes } from '../../const';

type LogoProps = {
  type: LogoTypes;
};

type Parametrs = {
  classPrefix: string;
  width: number;
  height: number;
};

function Logo({ type }: LogoProps): JSX.Element {

  /**
   * В зависимости от местоположения логотипа возвращает параметры для его отрисовки
   */
  const getParametrs = (placement: LogoTypes): Parametrs => {
    switch (placement) {
      case LogoTypes.Header:
        return { classPrefix: LogoTypes.Header, width: 81, height: 41 };
      case LogoTypes.Footer:
        return { classPrefix: LogoTypes.Footer, width: 64, height: 33 };
      default:
        return { classPrefix: LogoTypes.Header, width: 81, height: 41 };
    }
  };

  const { classPrefix, width, height } = getParametrs(type);
  return (
    <Link className={`${classPrefix}__logo-link`} to="/" data-testid="logo">
      <img
        className={`${classPrefix}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
