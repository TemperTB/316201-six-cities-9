import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRouteNoAuth({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );
  return authorizationStatus !== AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Main} />
  );
}

export default PrivateRouteNoAuth;
