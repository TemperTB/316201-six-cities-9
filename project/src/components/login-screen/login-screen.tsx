import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import LoginLocations from '../login-locations/login-locations';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Действие при вводе логина
   */
  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setLogin(value);
  };

  /**
   * Действие при вводе пароля
   */
  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setPassword(value);
  };

  /**
   * Действие при отправке формы
   */
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (login !== '' && password !== '') {
      dispatch(
        loginAction({
          login: login,
          password: password,
        }),
      );
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={login}
                onChange={handleLoginChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <LoginLocations/>
      </div>
    </main>
  );
}

export default LoginScreen;

