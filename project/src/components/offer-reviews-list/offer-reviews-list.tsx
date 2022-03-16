import React from 'react';
import { useAppSelector } from '../../hooks';
import { OfferReviews } from '../../types/offer-reviews';
import { limitingReviews, sortingReviews } from '../../utils';
import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';


function OfferReviewsList(): JSX.Element {
  // eslint-disable-next-line no-console
  console.info('OfferReviewsList');
  const reviews = useAppSelector((state) => state.reviews);
  const sortReviews: OfferReviews = sortingReviews(reviews);
  const reviewsForShow: OfferReviews = limitingReviews(sortReviews);

  return (
    <ul className="reviews__list">
      {reviewsForShow.map((review) => (
        <OfferReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default React.memo(OfferReviewsList);
