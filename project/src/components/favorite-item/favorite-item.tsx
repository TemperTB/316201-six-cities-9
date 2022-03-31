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

function FavoriteItem({
  city,
  validFavoritesOffers,
}: FavoriteItemProps): JSX.Element {
  const { name } = city;
  const dispatch = useAppDispatch();
  const handleLinkClick = (): void => {
    dispatch(changeCity(city));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            data-testid="locations__link"
            className="locations__item-link"
            to="/"
            onClick={handleLinkClick}
          >
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlacesCard
          offers={validFavoritesOffers}
          typeCard={PlaceCardTypes.Favorite}
        />
      </div>
    </li>
  );
}

export default FavoriteItem;

