import { Fragment } from 'react';
import { PlaceCardTypes } from '../../const';
import { OffersType } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  offers: OffersType;
  typeCard: PlaceCardTypes;
  onPlaceCardHover?: (id: number) => void;
};

function PlacesCard({
  offers,
  typeCard,
  onPlaceCardHover = undefined,
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
