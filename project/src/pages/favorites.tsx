import FavoritesScreen from '../components/favorites-screen/favorites-screen';
import Header from '../components/header/header';


function Favorites(): JSX.Element {

  return (
    <div className="page">
      <Header />
      <FavoritesScreen/>;
    </div>
  );
}

export default Favorites;
