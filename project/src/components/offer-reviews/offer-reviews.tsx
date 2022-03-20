import React from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';

function OfferReviews(): JSX.Element {

  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const reviews = useAppSelector(({ OFFER }) => OFFER.reviews);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList />
      {authorizationStatus === AuthorizationStatus.Auth ? <OfferReviewsForm /> : ''}
    </section>
  );
}

export default React.memo(OfferReviews);
