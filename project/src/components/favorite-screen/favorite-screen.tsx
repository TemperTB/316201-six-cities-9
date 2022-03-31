import { Fragment } from 'react';
import FavoriteList from '../favorite-list/favorite-list';
import Footer from '../footer/footer';


function FavoriteScreen(): JSX.Element {

  return (
    <Fragment>
      <main className="page__main page__main--favorites" data-testid="favorite-screen">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList />
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default FavoriteScreen;
