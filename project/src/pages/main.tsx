import Header from '../components/header/header';
import MainScreen from '../components/main-screen/main-screen';

type MainProps = {
  placesCount: number;
};

function Main({ placesCount }: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainScreen placesCount={placesCount} />
    </div>
  );
}

export default Main;
