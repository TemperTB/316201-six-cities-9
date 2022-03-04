import { Offers as OffersType } from '../types/offers';

import Header from '../components/header/header';
import MainScreen from '../components/main-screen/main-screen';

type MainProps = {
  placesCount: number;
  offers: OffersType;
};

function Main({ placesCount, offers }: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainScreen placesCount={placesCount} offers={offers} />
    </div>
  );
}

export default Main;
