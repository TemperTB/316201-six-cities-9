import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { getLoadedOffersStatus } from '../../store/main-process/selectors';

function MainScreen(): JSX.Element {
  const isOffersLoaded = useAppSelector(getLoadedOffersStatus);

  return (
    <main className="page__main page__main--index" data-testid="main-screen">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      {!isOffersLoaded ? <LoadingScreen /> : <Cities />}
    </main>
  );
}

export default MainScreen;
