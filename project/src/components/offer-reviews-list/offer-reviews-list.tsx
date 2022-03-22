import React from 'react';
import { useAppSelector } from '../../hooks';
import { getValidOfferReviews } from '../../store/offer-process/selectors';
import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';

function OfferReviewsList(): JSX.Element {
  const reviewsForShow = useAppSelector(getValidOfferReviews);

  return (
    <ul className="reviews__list">
      {reviewsForShow.map((review) => (
        <OfferReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default React.memo(OfferReviewsList);
