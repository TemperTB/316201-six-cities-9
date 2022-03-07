import Header from '../components/header/header';
import FavoritesScreen from '../components/favorites-screen/favorites-screen';
import { FavoriteOffersType } from '../types/favorite-offers';

type FavoritesProps = {
  favoriteOffers: FavoriteOffersType;
};

function Favorites({ favoriteOffers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <FavoritesScreen favoriteOffers={favoriteOffers} />;
    </div>
  );
}

export default Favorites;
