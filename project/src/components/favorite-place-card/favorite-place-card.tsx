import { Link } from 'react-router-dom';
import { AppRoute, PERCENT_PER_STAR } from '../../const';

import { FavoriteOfferType } from '../../types/favorite-offers';

type FavoritePlaceCardProps = {
  favoriteOffer: FavoriteOfferType;
};

function FavoritePlaceCard({
  favoriteOffer,
}: FavoritePlaceCardProps): JSX.Element {
  const { id, isFavorite, isPremium, price, rating, title, type } = favoriteOffer;
  return (
    <article className="favorites__card place-card">
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer + id}>
          <img
            className="place-card__image"
            src="img/apartment-small-03.jpg"
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * PERCENT_PER_STAR}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
