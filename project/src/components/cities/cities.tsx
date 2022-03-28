import { Offer } from '../../types/offers';
import Map from '../map/map';
import PlacesCard from '../places-card/places-card';
import { useCallback, useState } from 'react';
import { PlaceCardTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import PlacesSorting from '../places-sorting/places-sorting';
import { getCurrentCity, getSortType, getValidOffers } from '../../store/main-process/selectors';

function Cities(): JSX.Element {
  const validOffers = useAppSelector(getValidOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getSortType);


  const placesCount: number = validOffers.length;

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined,
  );

  const onPlaceCardHover = useCallback(
    (offer: Offer): void => setSelectedPoint(offer),
    [],
  );

  return (
    <div className="cities" data-testid="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {placesCount} places to stay in {currentCity.name}
          </b>
          <PlacesSorting sortType={sortType} />
          <PlacesCard
            offers={validOffers}
            onPlaceCardHover={onPlaceCardHover}
            typeCard={PlaceCardTypes.Main}
          />
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
