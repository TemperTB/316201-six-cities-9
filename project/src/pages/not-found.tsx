import { Link } from 'react-router-dom';
import Header from '../components/header/header';

function NotFound(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <div className="container">
          <section className="page-not-found">
            <h1 className="visually-hidden">Error</h1>
            <div className="page-not-found__status-wrapper">
              <b className="page-not-found__status">404</b>
              <p className="page-not-found__status-description">
                Page not found
              </p>
              <Link className="page-not-found__link" to="/">
                Go to main page
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
