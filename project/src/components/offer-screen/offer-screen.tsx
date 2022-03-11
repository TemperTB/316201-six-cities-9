import { OfferReviews } from '../../types/offer-reviews';
import { NearbyOffers } from '../../types/nearby-offers';
import OfferProperty from '../offer-property/offer-property';
import { PlaceCardTypes } from '../../const';
import PlacesCard from '../places-card/places-card';
import { useAppSelector } from '../../hooks';

type OfferScreenProps = {
  reviews: OfferReviews;
  nearbyOffers: NearbyOffers;
};

function OfferScreen({ reviews, nearbyOffers }: OfferScreenProps): JSX.Element {

  const { validOffers } = useAppSelector((state) => state);

  return (
    <main className="page__main page__main--property">
      <OfferProperty
        offer={validOffers[0]}
        reviews={reviews}
        nearbyOffers={nearbyOffers}
      />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <PlacesCard
              offers={nearbyOffers}
              typeCard={PlaceCardTypes.Nearby}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferScreen;
