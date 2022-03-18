import Header from '../components/header/header';
import FavoritesScreen from '../components/favorites-screen/favorites-screen';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchFavoriteOffersAction } from '../store/api-actions';
import { useEffect } from 'react';


function Favorites(): JSX.Element {
  const isFavoriteOffersLoaded = useAppSelector(
    ({ FAVORITE }) => FAVORITE.isFavoriteOffersLoaded,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [isFavoriteOffersLoaded]);

  return (
    <div className="page">
      <Header />
      <FavoritesScreen/>;
    </div>
  );
}

export default Favorites;
