import Header from '../components/header/header';
import OfferScreen from '../components/offer-screen/offer-screen';
import { useLocation } from 'react-router-dom';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction
} from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import LoadingScreen from '../components/loading-screen/loading-screen';
import {
  getLoadNearbyStatus,
  getLoadOfferStatus
} from '../store/offer-process/selectors';

function Offer(): JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const pathnames = pathname.split('/');
    dispatch(fetchOfferAction(pathnames[2]));
    dispatch(fetchReviewsAction(pathnames[2]));
    dispatch(fetchNearbyOffersAction(pathnames[2]));
  }, [pathname]);

  const isNearbyOffersLoaded = useAppSelector(getLoadNearbyStatus);
  useEffect(() => {
    const pathnames = pathname.split('/');
    if (!isNearbyOffersLoaded) {
      dispatch(fetchNearbyOffersAction(pathnames[2]));
    }
  }, [isNearbyOffersLoaded]);

  const isOfferLoaded = useAppSelector(getLoadOfferStatus);

  return (
    <div className="page">
      <Header />
      {!isOfferLoaded ? <LoadingScreen /> : <OfferScreen />};
    </div>
  );
}

export default Offer;
