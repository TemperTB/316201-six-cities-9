import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRouteAuth(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const { children } = props;

  return authorizationStatus !== AuthorizationStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRouteAuth;
