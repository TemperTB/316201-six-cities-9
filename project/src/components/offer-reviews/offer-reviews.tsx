import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';

function OfferReviews(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus,
  );
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewsList />
      {authorizationStatus === AuthorizationStatus.Auth ? <OfferReviewsForm />: ''}

    </section>
  );
}

export default OfferReviews;
