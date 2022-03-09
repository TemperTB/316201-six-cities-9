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
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          typeCard={typeCard}
          onPlaceCardHover={onPlaceCardHover}
        />
      ))}
    </Fragment>
  );
}

export default PlacesCard;
