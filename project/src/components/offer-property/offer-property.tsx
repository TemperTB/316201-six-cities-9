import { PERCENT_PER_STAR } from '../../const';
import OfferReviews from '../offer-reviews/offer-reviews';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';


function OfferProperty(): JSX.Element {
  // eslint-disable-next-line no-console
  console.info('OfferProperty');
  const isNearbyOffersLoaded = useAppSelector(
    (state) => state.isNearbyOffersLoaded,
  );
  const isOfferLoaded = useAppSelector((state) => state.isOfferLoaded);
  const isOfferReviewsLoaded = useAppSelector(
    (state) => state.isOfferReviewsLoaded,
  );
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const offer = useAppSelector((state) => state.offer);
  const {
    images,
    title,
    isFavorite,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;
  const { name, isPro, avatarUrl } = host;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.map((imageUrl, id) => {
            const keyValue = id + imageUrl;
            return id < 6 ? (
              <div key={keyValue} className="property__image-wrapper">
                <img
                  className="property__image"
                  src={imageUrl}
                  alt="Photo studio"
                />
              </div>
            ) : (
              ''
            );
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button
              className={`property__bookmark-button button ${
                isFavorite ? 'property__bookmark-button--active' : ''
              }`}
              type="button"
            >
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: `${rating * PERCENT_PER_STAR}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">
              {rating}
            </span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((good, id) => {
                const keyValue = id + good;
                return (
                  <li key={keyValue} className="property__inside-item">
                    {good}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div
                className={`property__avatar-wrapper ${
                  isPro && 'property__avatar-wrapper--pro'
                } user__avatar-wrapper`}
              >
                <img
                  className="property__avatar user__avatar"
                  src={avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{name}</span>
              <span className="property__user-status">{isPro && 'Pro'}</span>
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
            </div>
          </div>
          {isOfferReviewsLoaded ? <OfferReviews /> : ''}
        </div>
      </div>
      <section className="property__map map">
        {isNearbyOffersLoaded && isOfferLoaded ? (
          <Map
            centerCoordinates={nearbyOffers[0].city.location}
            key={`${offer.id}: ${offer.title}`}
            points={[...nearbyOffers, offer]}
            selectedPoint={offer}
            height={579}
          />
        ) : (
          ''
        )}
      </section>
    </section>
  );
}

export default OfferProperty;
