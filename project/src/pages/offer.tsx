import Header from '../components/header/header';
import OfferScreen from '../components/offer-screen/offer-screen';
import { OfferReviews } from '../types/offer-reviews';
import { NearbyOffers } from '../types/nearby-offers';
import { useLocation } from 'react-router-dom';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import LoadingScreen from '../components/loading-screen/loading-screen';

type OfferProps = {
  reviews: OfferReviews;
  nearbyOffers: NearbyOffers;
};

function Offer({ reviews, nearbyOffers }: OfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const pathnames = pathname.split('/');
    dispatch(fetchOfferAction(pathnames[2]));
    dispatch(fetchNearbyOffersAction(pathnames[2]));
    dispatch(fetchReviewsAction(pathnames[2]));
  }, [pathname]);

  const { isOfferLoaded } = useAppSelector((state) => state);

  return (
    <div className="page">
      <Header />
      {!isOfferLoaded ? <LoadingScreen /> : <OfferScreen />};
    </div>
  );
}

export default Offer;
