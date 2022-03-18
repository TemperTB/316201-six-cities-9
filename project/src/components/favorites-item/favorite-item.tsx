import { Link } from 'react-router-dom';
import { PlaceCardTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process';
import { FavoriteOffers } from '../../types/favorite-offers';
import { City } from '../../types/offers';
import PlacesCard from '../places-card/places-card';

type FavoriteItemProps = {
  city: City;
  validFavoritesOffers: FavoriteOffers;
};

function FavoritesItem({
  city,
  validFavoritesOffers,
}: FavoriteItemProps): JSX.Element {
  const { name } = city;
  const dispatch = useAppDispatch();
  const changeCityOnMain = (): void => {
    dispatch(changeCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={changeCityOnMain}
          >
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlacesCard
          offers={validFavoritesOffers}
          typeCard={PlaceCardTypes.Favorites}
        />
      </div>
    </li>
  );
}

export default FavoritesItem;

