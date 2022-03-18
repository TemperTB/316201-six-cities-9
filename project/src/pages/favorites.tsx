import Header from '../components/header/header';
import FavoritesScreen from '../components/favorites-screen/favorites-screen';


function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <FavoritesScreen/>;
    </div>
  );
}

export default Favorites;
