import { Offer } from '../../types/offers';
import Map from '../map/map';

import PlacesCard from '../places-card/places-card';
import { useState } from 'react';
import { PlaceCardTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import PlacesSorting from '../places-sorting/places-sorting';

function Cities(): JSX.Element {
  const { validOffers, currentCity, sortType } = useAppSelector(
    (state) => state,
  );

  const placesCount: number = validOffers.length;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined,
  );

  const onPlaceCardHover = (offer: Offer) => {
    setSelectedPoint(offer);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {placesCount} places to stay in {currentCity.name}
          </b>
          <PlacesSorting sortType={sortType} />
          <div className="cities__places-list places__list tabs__content">
            <PlacesCard
              offers={validOffers}
              onPlaceCardHover={onPlaceCardHover}
              typeCard={PlaceCardTypes.Main}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              centerCoordinates={currentCity.location}
              height={750}
              key={currentCity.name}
              points={validOffers}
              selectedPoint={selectedPoint}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
