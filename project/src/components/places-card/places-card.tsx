import React from 'react';
import { PlaceCardTypes } from '../../const';
import { Offers, Offer } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  typeCard: PlaceCardTypes;
  offers: Offers;
  onPlaceCardHover?: (offer: Offer) => void;
};

function PlacesCard({
  offers,
  onPlaceCardHover = undefined,
  typeCard,
}: PlacesCardProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content" data-testid="places-card">
      {offers.map((offer, id) => {
        const keyValue = `${id}: ${offer.id}`;
        return (
          <PlaceCard
            offer={offer}
            key={keyValue}
            typeCard={typeCard}
            onPlaceCardHover={onPlaceCardHover}
          />
        );
      })}
    </div>
  );
}

export default React.memo(PlacesCard);
