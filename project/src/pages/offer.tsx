import Header from '../components/header/header';
import OfferScreen from '../components/offer-screen/offer-screen';
import { OfferType } from '../types/offers';
import { OfferReviewsType } from '../types/offer-reviews';

type OfferProps = {
  offer: OfferType;
  reviews: OfferReviewsType;
};

function Offer({ offer, reviews }: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <OfferScreen offer={offer} reviews={reviews}/>;
    </div>
  );
}

export default Offer;
