import { useState, Fragment } from 'react';
import { Offers } from '../../types/offers';

import PlaceCard from '../place-card/place-card';

type PlacesCardProps = {
  offers: Offers;
};

function PlacesCard({ offers }: PlacesCardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <Fragment>
      {offers.map((offer, id) => {
        const keyValue = `${id}-${offer.title}`;
        return (
          <PlaceCard
            offer={offer}
            key={keyValue}
            changeActiveCard={(placeCardId) =>{
              if (activeCard !== placeCardId) {
                setActiveCard(placeCardId);
              }
            }}
          />);
      })}
    </Fragment>
  );
}

export default PlacesCard;
