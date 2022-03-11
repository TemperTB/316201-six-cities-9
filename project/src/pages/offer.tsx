import Header from '../components/header/header';
import OfferScreen from '../components/offer-screen/offer-screen';
import { OfferReviews } from '../types/offer-reviews';
import { NearbyOffers } from '../types/nearby-offers';

type OfferProps = {
  reviews: OfferReviews;
  nearbyOffers: NearbyOffers;
};

function Offer({ reviews, nearbyOffers }: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <OfferScreen reviews={reviews} nearbyOffers={nearbyOffers}/>;
    </div>
  );
}

export default Offer;
