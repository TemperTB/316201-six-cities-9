import Header from '../components/header/header';
import OfferScreen from '../components/offer-screen/offer-screen';
import { OfferType } from '../types/offers';
import { OfferReviewsType } from '../types/offer-reviews';
import { NearbyOffersType } from '../types/nearby-offers';

type OfferProps = {
  offer: OfferType;
  reviews: OfferReviewsType;
  nearbyOffers: NearbyOffersType;
};

function Offer({ offer, reviews, nearbyOffers }: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <OfferScreen offer={offer} reviews={reviews} nearbyOffers={nearbyOffers}/>;
    </div>
  );
}

export default Offer;
