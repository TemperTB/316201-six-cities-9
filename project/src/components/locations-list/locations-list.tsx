import React from 'react';
import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentCity } from '../../store/main-process/selectors';
import LocationItem from '../location-item/location-item';

function LocationsList(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  return (
    <section className="locations container" >
      <ul className="locations__list tabs__list" data-testid="locations_list">
        {CITIES.map((item, id) => {
          const keyValue = `${id}: ${item.name}`;
          return (
            <LocationItem city={item} key={keyValue} activeCity={currentCity} />
          );
        })}
      </ul>
    </section>
  );
}

export default React.memo(LocationsList);
