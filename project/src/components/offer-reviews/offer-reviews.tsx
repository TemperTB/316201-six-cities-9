import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import { OfferReviewsType } from '../../types/offer-reviews';


type OfferReviewsProps = {
  reviews: OfferReviewsType;
};

function OfferReviews({ reviews }: OfferReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList reviews={reviews}/>
      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
