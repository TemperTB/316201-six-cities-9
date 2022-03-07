import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import PrivateRoute from '../private-route/private-route';

import { OffersType } from '../../types/offers';
import { FavoriteOffersType } from '../../types/favorite-offers';

import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';

type AppScreenProps = {
  placesCount: number;
  offers: OffersType;
  favoriteOffers: FavoriteOffersType;
};

function App({
  placesCount,
  offers,
  favoriteOffers,
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesCount={placesCount} offers={offers} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
