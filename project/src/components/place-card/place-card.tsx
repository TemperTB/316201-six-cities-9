import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, PERCENT_PER_STAR, PlaceCardTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { errorHandle } from '../../services/error-handle';
import { fetchChangeStatusOffer, fetchOffersAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';

type PlaceCardProps = {
  offer: Offer;
  typeCard: PlaceCardTypes;
  onPlaceCardHover?: (offer: Offer) => void;
};

type Parametrs = {
  mainClass: string;
  classPrefix: string;
  imgWidth: number;
  imgHeight: number;
};

/**
 * В зависимости от места отрисовки компонента (type) возвращает значения необходимые для правильной отрисовки
 */
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
  typeCard,
  onPlaceCardHover=undefined,
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
  const { mainClass, classPrefix, imgWidth, imgHeight } =
    getParametrs(typeCard);

  const dispatch = useAppDispatch();

  /**
   * Асинхронное действие, которое следит за изменением статуса предложения на сервере.
   * При корректном изменении запрашивает с сервера предложения
   */
  const changeOfferStatus = async () => {
    try {
      isFavorite
        ? await dispatch(fetchChangeStatusOffer({ id, status: 0 }))
        : await dispatch(fetchChangeStatusOffer({ id, status: 1 }));
      dispatch(fetchOffersAction());
    } catch (error) {
      errorHandle(error);
    }
  };

  return (
    <article
      className={`${mainClass} place-card`}
      onMouseOver={() => {
        onPlaceCardHover && onPlaceCardHover(offer);
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
        <Link to={AppRoute.Offer + id} onClick={() => window.scrollTo(0, 0)}>
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
            onClick={changeOfferStatus}
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
          <Link to={AppRoute.Offer + id} onClick={() => window.scrollTo(0, 0)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default React.memo(PlaceCard);
