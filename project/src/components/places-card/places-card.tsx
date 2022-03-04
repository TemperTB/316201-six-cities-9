import { useState, Fragment } from 'react';
import { Offers as OffersType } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  offers: OffersType;
};

function PlacesCard({ offers }: PlacesCardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <Fragment>
      {offers.map((offer, id) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          changeActiveCard={(placeCardId) => {
            if (activeCard !== placeCardId) {
              setActiveCard(placeCardId);
            }
          }}
        />
      ))}
    </Fragment>
  );
}

export default PlacesCard;
