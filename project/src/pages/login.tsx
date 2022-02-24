import Header from '../components/header/header';
import LoginScreen from '../components/login-screen/login-screen';

function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />
      <LoginScreen />;
    </div>
  );
}

export default Login;
