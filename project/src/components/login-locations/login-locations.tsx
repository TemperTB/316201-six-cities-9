import React from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process';
import { City } from '../../types/offers';
import { getRandomArrayElement } from '../../utils';

function LoginLocations(): JSX.Element {
  const randomCity: City = getRandomArrayElement(CITIES);
  const { name } = randomCity;

  const dispatch = useAppDispatch();
  const handleLinkClick = (): void => {
    dispatch(changeCity(randomCity));
  };

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to="/"
          onClick={handleLinkClick}
        >
          <span>{name}</span>
        </Link>
      </div>
    </section>
  );
}

export default React.memo(LoginLocations);
