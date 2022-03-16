import React from 'react';
import { useAppSelector } from '../../hooks';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';

function OfferReviews(): JSX.Element {
  // eslint-disable-next-line no-console
  console.info('OfferReviews');
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );
  const reviews = useAppSelector((state) => state.reviews);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList />
      {authorizationStatus ? <OfferReviewsForm /> : ''}
    </section>
  );
}

export default React.memo(OfferReviews);
