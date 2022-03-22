import { useEffect } from 'react';
import Header from '../components/header/header';
import MainScreenEmpty from '../components/main-screen-empty/main-screen-empty';
import MainScreen from '../components/main-screen/main-screen';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchOffersAction } from '../store/api-actions';
import { getLoadedOffersStatus, getOffers } from '../store/main-process/selectors';

function Main(): JSX.Element {
  const isOffersLoaded = useAppSelector(getLoadedOffersStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [isOffersLoaded]);
  const offers = useAppSelector(getOffers);

  return (
    <div className="page page--gray page--main">
      <Header />
      {isOffersLoaded && offers.length === 0 ? (
        <MainScreenEmpty />
      ) : (
        <MainScreen />
      )}
    </div>
  );
}

export default Main;
