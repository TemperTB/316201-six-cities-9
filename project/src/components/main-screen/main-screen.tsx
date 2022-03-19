
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import CitiesEmpty from '../cities-empty/cities-empty';

function MainScreen(): JSX.Element {

  const offers = useAppSelector(({ MAIN }) => MAIN.offers);
  const isOffersLoaded = useAppSelector(({ MAIN }) => MAIN.isOffersLoaded);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      {!isOffersLoaded ? <LoadingScreen /> : ''}
      {isOffersLoaded && offers.length === 0 ? <CitiesEmpty/> : ''}
      {isOffersLoaded && offers.length !== 0 ? <Cities /> : ''}
    </main>
  );
}

export default MainScreen;
