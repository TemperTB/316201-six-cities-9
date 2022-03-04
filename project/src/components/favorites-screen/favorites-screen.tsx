import { Fragment } from 'react';
import { FavoriteOffers as FavoriteOffersType } from '../../types/favorite-offers';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';

type FavoriteScreenProps = {
  favoriteOffers: FavoriteOffersType;
};

function FavoritesScreen({ favoriteOffers }: FavoriteScreenProps): JSX.Element {
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
                  {favoriteOffers.map((favoriteOffer) => (
                    <FavoritePlaceCard
                      favoriteOffer={favoriteOffer}
                      key={favoriteOffer.id}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </Fragment>
  );
}

export default FavoritesScreen;