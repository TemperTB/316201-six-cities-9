import { OfferType } from '../../types/offers';
import { OfferReviewsType } from '../../types/offer-reviews';
import { NearbyOffersType } from '../../types/nearby-offers';
import OfferProperty from '../offer-property/offer-property';
import { PlaceCardTypes } from '../../const';
import PlacesCard from '../places-card/places-card';

type OfferScreenProps = {
  offer: OfferType;
  reviews: OfferReviewsType;
  nearbyOffers: NearbyOffersType;
};

function OfferScreen({ offer, reviews, nearbyOffers }: OfferScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <OfferProperty offer={offer} reviews={reviews} nearbyOffers={nearbyOffers} />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <PlacesCard offers={nearbyOffers} typeCard={PlaceCardTypes.Nearby} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
