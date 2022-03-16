import React from 'react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function HeaderNav(): JSX.Element | null {
  // eslint-disable-next-line no-console
  console.info('HeaderNav');

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );

  /**
   * В зависимости от того авторизован пользователь или нет, возвращает разметку для меню навигации
   */
  const getNavItems = (status: AuthorizationStatus): JSX.Element => {
    switch (status) {
      case AuthorizationStatus.Auth:
        return (
          <Fragment>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to="/favorites"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="/"
                onClick={(evt) => {
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </Fragment>
        );
      case AuthorizationStatus.NoAuth:
        return (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to="/login"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        );
      case AuthorizationStatus.Unknown:
        return (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to="/login"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        );
      default:
        return (
          <Fragment>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to="/favorites"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="/"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </Fragment>
        );
    }
  };

  const { pathname } = useLocation();

  if (pathname === AppRoute.Login) {
    return null;
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">{getNavItems(authorizationStatus)}</ul>
    </nav>
  );
}

export default React.memo(HeaderNav);
