import OfferProperty from '../offer-property/offer-property';
import { PlaceCardTypes } from '../../const';
import PlacesCard from '../places-card/places-card';
import { useAppSelector } from '../../hooks';
import React from 'react';


function OfferScreen(): JSX.Element {
  // eslint-disable-next-line no-console
  console.info('OfferScreen');

  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  return (
    <main className="page__main page__main--property">
      <OfferProperty />
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

export default React.memo(OfferScreen);
