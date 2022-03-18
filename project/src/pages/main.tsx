import { useEffect } from 'react';
import Header from '../components/header/header';
import MainScreen from '../components/main-screen/main-screen';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchOffersAction } from '../store/api-actions';

function Main(): JSX.Element {
  const isOffersLoaded = useAppSelector(({ MAIN }) => MAIN.isOffersLoaded);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [isOffersLoaded]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <MainScreen />
    </div>
  );
}

export default Main;
