import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import PrivateRoute from '../private-route/private-route';

import { FavoriteOffers } from '../../types/favorite-offers';
import { OfferReviews } from '../../types/offer-reviews';


import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';
import { NearbyOffers } from '../../types/nearby-offers';
// import { useAppSelector } from '../../hooks';
// import LoadingScreen from '../loading-screen/loading-screen';


type AppScreenProps = {
  favoriteOffers: FavoriteOffers;
  reviews: OfferReviews;
  nearbyOffers: NearbyOffers;
};

function App({
  favoriteOffers,
  reviews,
  nearbyOffers,
}: AppScreenProps): JSX.Element {

  // const { isDataLoaded } = useAppSelector((state) => state);

  // if (!isDataLoaded) {
  //   return <LoadingScreen />;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={`${AppRoute.Offer}:id`} element={<Offer reviews={reviews} nearbyOffers={nearbyOffers}/>} />
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
