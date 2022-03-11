import { OfferReviews } from '../../types/offer-reviews';
import OfferReviewsItem from '../offer-reviews-item/offer-reviews-item';

type OfferReviewsListProps = {
  reviews: OfferReviews;
};

function OfferReviewsList({ reviews }: OfferReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <OfferReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default OfferReviewsList;
