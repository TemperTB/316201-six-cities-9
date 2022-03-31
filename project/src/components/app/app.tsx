import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import PrivateRouteAuth from '../private-route-auth/private-route-auth';
import PrivateRouteNoAuth from '../private-route-no-auth/private-route-no-auth';

import Login from '../../pages/login';
import Main from '../../pages/main';
import NotFound from '../../pages/not-found';
import Offer from '../../pages/offer';
import Favorites from '../../pages/favorites';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRouteNoAuth>
            <Login/>
          </PrivateRouteNoAuth>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
      <Route path={`${AppRoute.Offer}:id`} element={<Offer />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRouteAuth>
            <Favorites/>
          </PrivateRouteAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
