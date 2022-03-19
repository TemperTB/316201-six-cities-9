import { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import FavoritesListEmpty from '../favorites-list-empty/favorites-list-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';

function FavoritesScreen(): JSX.Element {

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
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {!isFavoriteOffersLoaded ? <LoadingScreen /> : ''}
            {isFavoriteOffersLoaded && favoriteOffers.length === 0 ? (
              <FavoritesListEmpty />
            ) : (
              ''
            )}
            {isFavoriteOffersLoaded && favoriteOffers.length !== 0 ? (
              <FavoritesList />
            ) : (
              ''
            )}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FavoritesScreen;
