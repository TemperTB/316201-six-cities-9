import { ActionCreatorWithoutPayload, AsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, PERCENT_PER_STAR, PlaceCardTypes } from '../../const';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../../store/api-actions';
import { resetNearbyOffers } from '../../store/offer-process/offer-process';
import { Offer } from '../../types/offers';
import BookmarkButtonMain from '../bookmark-button-main/bookmark-button-main';

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
  callbackForButton:
    | AsyncThunk<void, void, Record<string, unknown>>
    | ActionCreatorWithoutPayload<string>;
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
        callbackForButton: fetchOffersAction,
      };
    case PlaceCardTypes.Favorite:
      return {
        mainClass: 'favorites__card',
        classPrefix: PlaceCardTypes.Favorite,
        imgWidth: 150,
        imgHeight: 110,
        callbackForButton: fetchFavoriteOffersAction,
      };
    case PlaceCardTypes.Nearby:
      return {
        mainClass: 'near-places__card',
        classPrefix: PlaceCardTypes.Nearby,
        imgWidth: 260,
        imgHeight: 200,
        callbackForButton: resetNearbyOffers,
      };
    default:
      return {
        mainClass: 'cities__place-card',
        classPrefix: PlaceCardTypes.Main,
        imgWidth: 260,
        imgHeight: 200,
        callbackForButton: fetchOffersAction,
      };
  }
};

function PlaceCard({
  offer,
  typeCard,
  onPlaceCardHover = undefined,
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
  const {
    mainClass,
    classPrefix,
    imgWidth,
    imgHeight,
    callbackForButton,
  } = getParametrs(typeCard);


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
          <BookmarkButtonMain cb={callbackForButton} id={id} isFavorite={isFavorite} />
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
