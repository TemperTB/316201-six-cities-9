import Header from '../components/header/header';
import FavoritesScreen from '../components/favorites-screen/favorites-screen';
import { FavoriteOffers } from '../types/favorite-offers';


type FavoritesProps = {
  favoriteOffers: FavoriteOffers;
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
