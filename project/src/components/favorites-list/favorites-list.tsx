import { PlaceCardTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import PlacesCard from '../places-card/places-card';
function FavoritesList(): JSX.Element {

  const offers = useAppSelector(({ MAIN }) => MAIN.offers);

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <PlacesCard offers={offers} typeCard={PlaceCardTypes.Favorites} />
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;
