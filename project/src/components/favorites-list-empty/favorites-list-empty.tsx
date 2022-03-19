import { useEffect } from 'react';

function FavoritesListEmpty(): JSX.Element {
  useEffect(() => {
    const page: HTMLElement | null = document.querySelector('.page__main');
    const favorites: HTMLElement | null = document.querySelector('.favorites');
    (page as HTMLElement).classList.add('page__main--favorites-empty');
    (favorites as HTMLElement).classList.add('favorites--empty');
    return () => {
      (page as HTMLElement).classList.remove('page__main--favorites-empty');
      (favorites as HTMLElement).classList.remove('favorites--empty');
    };
  }, []);

  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">
        Save properties to narrow down search or plan your future trips.
      </p>
    </div>
  );
}

export default FavoritesListEmpty;
