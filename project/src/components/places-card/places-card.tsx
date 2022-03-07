import { Fragment } from 'react';
import { OffersType } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  offers: OffersType;
  onPlaceCardHover: (id: number) => void;
};

function PlacesCard({
  offers,
  onPlaceCardHover,
}: PlacesCardProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onPlaceCardHover={onPlaceCardHover}
        />
      ))}
    </Fragment>
  );
}

export default PlacesCard;
