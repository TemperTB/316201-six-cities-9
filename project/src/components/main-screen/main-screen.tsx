
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {

  const isOffersLoaded = useAppSelector(({ MAIN }) => MAIN.isOffersLoaded);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      {!isOffersLoaded ? <LoadingScreen /> : <Cities />}
    </main>
  );
}

export default MainScreen;
