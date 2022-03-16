import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRouteNoAuth(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );
  const { children } = props;

  return authorizationStatus === AuthorizationStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={AppRoute.Main} />
  );
}

export default PrivateRouteNoAuth;
