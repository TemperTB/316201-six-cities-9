import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks';
import LocationItem from '../location-item/location-item';

function LocationsList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (
        <LocationItem city={item} key={item.name} activeCity={currentCity} />
      ))}
    </ul>
  );
}

export default LocationsList;
