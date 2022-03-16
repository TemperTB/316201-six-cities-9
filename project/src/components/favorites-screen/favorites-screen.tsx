import { Fragment } from 'react';
import { PlaceCardTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { FavoriteOffers } from '../../types/favorite-offers';
import Footer from '../footer/footer';
import PlacesCard from '../places-card/places-card';

type FavoriteScreenProps = {
  favoriteOffers: FavoriteOffers;
};

function FavoritesScreen({ favoriteOffers }: FavoriteScreenProps): JSX.Element {

  const validOffers = useAppSelector(({ OFFERS }) => OFFERS.validOffers);

  return (
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlacesCard
                    offers={validOffers}
                    typeCard={PlaceCardTypes.Favorites}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FavoritesScreen;
