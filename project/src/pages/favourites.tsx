import Header from '../components/header/header';
import FavouritesScreen from '../components/favourites-screen/favourites-screen';

function Favourites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <FavouritesScreen />;
    </div>
  );
}

export default Favourites;
