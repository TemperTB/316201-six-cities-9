import Header from '../components/header/header';
import MainScreen from '../components/main-screen/main-screen';

function Main(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Header />
      <MainScreen/>
    </div>
  );
}

export default Main;
