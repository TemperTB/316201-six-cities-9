import { useEffect } from 'react';
import FavoriteScreen from '../components/favorite-screen/favorite-screen';
import FavoriteScreenEmpty from '../components/favorite-screen-empty/favorite-screen-empty';
import Header from '../components/header/header';
import LoadingScreen from '../components/loading-screen/loading-screen';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchFavoriteOffersAction } from '../store/api-actions';


function Favorites(): JSX.Element {
  const isFavoriteOffersLoaded = useAppSelector(
    ({ FAVORITE }) => FAVORITE.isFavoriteOffersLoaded,
  );
  const favoriteOffers = useAppSelector(
    ({ FAVORITE }) => FAVORITE.favoriteOffers,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, []);

  return (
    <div className="page">
      <Header />
      {!isFavoriteOffersLoaded ? <LoadingScreen /> : ''}
      {isFavoriteOffersLoaded && favoriteOffers.length === 0 ? (
        <FavoriteScreenEmpty />
      ) : (
        ''
      )}
      {isFavoriteOffersLoaded && favoriteOffers.length !== 0 ? (
        <FavoriteScreen />
      ) : (
        ''
      )}
    </div>
  );
}

export default Favorites;
