import { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen(): JSX.Element {

  const isFavoriteOffersLoaded = useAppSelector(
    ({ FAVORITE }) => FAVORITE.isFavoriteOffersLoaded,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, []);

  return (
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {isFavoriteOffersLoaded ? <FavoritesList /> : <LoadingScreen />}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FavoritesScreen;
