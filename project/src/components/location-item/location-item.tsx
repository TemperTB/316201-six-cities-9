import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { CityType } from '../../types/offers';

type LocationItemProps = {
  activeCity: CityType;
  city: CityType;
  key: string;
};
function LocationItem({
  city,
  key,
  activeCity,
}: LocationItemProps): JSX.Element {
  const { name } = city;
  const isActive = name === activeCity.name ? 'tabs__item--active' : '';
  const dispatch = useAppDispatch();
  return (
    <li key={key} className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive}`}
        href="#"
        onClick={() =>
          dispatch(changeCity({ city }))}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default LocationItem;
