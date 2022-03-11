import { Fragment } from 'react';
import { PlaceCardTypes } from '../../const';
import { OffersType, OfferType } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  typeCard: PlaceCardTypes;
  offers: OffersType;
  onPlaceCardHover?: (offer: OfferType) => void;
};

function PlacesCard({
  offers,
  onPlaceCardHover = undefined,
  typeCard,
}: PlacesCardProps): JSX.Element {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default PlacesCard;
