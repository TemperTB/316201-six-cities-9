import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import PrivateRouteAuth from '../private-route-auth/private-route-auth';

import { FavoriteOffers } from '../../types/favorite-offers';

import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';


type AppScreenProps = {
  favoriteOffers: FavoriteOffers;
};

function App({
  favoriteOffers,
}: AppScreenProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(
    (state) => state,
  );

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
        <Route
          path={`${AppRoute.Offer}:id`}
          element={<Offer/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRouteAuth authorizationStatus={authorizationStatus}>
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRouteAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
