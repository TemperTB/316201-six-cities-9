import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks';
import { FavoriteOffers } from '../../types/favorite-offers';
import { filterOffers } from '../../utils';
import FavoriteItem from '../favorite-item/favorite-item';

function FavoriteList(): JSX.Element {
  const favoriteOffers = useAppSelector(
    ({ FAVORITE }) => FAVORITE.favoriteOffers,
  );

  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const validFavoritesOffers: FavoriteOffers = filterOffers(
          favoriteOffers,
          city,
        );
        return validFavoritesOffers.length !== 0 ? (
          <FavoriteItem
            key={city.name}
            city={city}
            validFavoritesOffers={validFavoritesOffers}
          />
        ) : (
          ''
        );
      })}
    </ul>
  );
}

export default FavoriteList;
