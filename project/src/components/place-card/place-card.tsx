import { Link } from 'react-router-dom';
import { AppRoute, PERCENT_PER_STAR, PlaceCardTypes } from '../../const';
import { OfferType } from '../../types/offers';

type PlaceCardProps = {
  offer: OfferType;
  key: number;
  typeCard: PlaceCardTypes;
  onPlaceCardHover?: (id: number) => void;
};

type Parametrs = {
  mainClass: string;
  classPrefix: string;
  imgWidth: number;
  imgHeight: number;
};

const getParametrs = (type: PlaceCardTypes): Parametrs => {
  switch (type) {
    case PlaceCardTypes.Main:
      return {
        mainClass: 'cities__place-card',
        classPrefix: PlaceCardTypes.Main,
        imgWidth: 260,
        imgHeight: 200,
      };
    case PlaceCardTypes.Favorites:
      return {
        mainClass: 'favorites__card',
        classPrefix: PlaceCardTypes.Favorites,
        imgWidth: 150,
        imgHeight: 110,
      };
    case PlaceCardTypes.Nearby:
      return {
        mainClass: 'near-places__card',
        classPrefix: PlaceCardTypes.Nearby,
        imgWidth: 260,
        imgHeight: 200,
      };
    default:
      return {
        mainClass: 'cities__place-card',
        classPrefix: PlaceCardTypes.Main,
        imgWidth: 260,
        imgHeight: 200,
      };
  }
};

function PlaceCard({
  offer,
  key,
  typeCard,
  onPlaceCardHover,
}: PlaceCardProps): JSX.Element {
  const {
    previewImage,
    isPremium,
    rating,
    isFavorite,
    title,
    type,
    price,
    id,
  } = offer;
  const { mainClass, classPrefix, imgWidth, imgHeight } = getParametrs(typeCard);
  return (
    <article
      key={key}
      cities__place-card
      className={`${mainClass} place-card`}
      onMouseOver={() => {
        onPlaceCardHover && onPlaceCardHover(id);
      }}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${classPrefix}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={AppRoute.Offer + id}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth}
            height={imgHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text"> /&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite && 'place-card__bookmark-button--active'
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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

export default PlaceCard;
