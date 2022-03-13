import Header from '../components/header/header';
import MainScreen from '../components/main-screen/main-screen';
import { store } from '../store';
import { fetchOffersAction } from '../store/api-actions';

function Main(): JSX.Element {

  store.dispatch(fetchOffersAction());

  return (
    <div className="page page--gray page--main">
      <Header />
      <MainScreen/>
    </div>
  );
}

export default Main;
