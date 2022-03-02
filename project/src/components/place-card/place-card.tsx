import { Offer } from '../../types/offers';

type PlaceCardProps = {
  offer: Offer;
  changeActiveCard: (id: number) => void;
};

/**
 * Одна звезда рейтинга занимает 20 процентов ширины
 */
const PERCENT_PER_STAR = 20;

function PlaceCard({ offer, changeActiveCard }: PlaceCardProps): JSX.Element {
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
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        changeActiveCard(id);
      }}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text"> /&nbsp;night</span>
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
