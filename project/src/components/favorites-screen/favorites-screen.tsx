import { Fragment } from 'react';
import { useAppSelector } from '../../hooks';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';

function FavoritesScreen(): JSX.Element {

  const isFavoriteOffersLoaded = useAppSelector(
    ({ FAVORITE }) => FAVORITE.isFavoriteOffersLoaded,
  );

  return (
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {isFavoriteOffersLoaded ? <FavoritesList /> : ''}
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FavoritesScreen;
