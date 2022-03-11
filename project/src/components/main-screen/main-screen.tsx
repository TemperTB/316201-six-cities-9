
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen(): JSX.Element {

  const { isDataLoaded } = useAppSelector((state) => state);

  return (


    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      {!isDataLoaded ? <LoadingScreen /> : <Cities />}
    </main>
  );
}

export default MainScreen;
