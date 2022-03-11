import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks';
import LocationItem from '../location-item/location-item';

function LocationsList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
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

export default LocationsList;
