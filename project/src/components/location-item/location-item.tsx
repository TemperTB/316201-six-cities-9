import React from 'react';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process';
import { City } from '../../types/offers';

type LocationItemProps = {
  activeCity: City;
  city: City;
};

function LocationItem({
  city,
  activeCity,
}: LocationItemProps): JSX.Element {

  const { name } = city;
  const isActive = name === activeCity.name ? 'tabs__item--active' : '';
  const dispatch = useAppDispatch();

  const handleLinkClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive}`}
        href="#"
        onClick={handleLinkClick}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default React.memo(LocationItem);
