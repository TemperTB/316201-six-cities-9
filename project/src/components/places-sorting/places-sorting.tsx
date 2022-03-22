import React from 'react';
import { sortTypes } from '../../const';
import { SortType } from '../../types/sort';
import PlacesSortingOption from '../places-sorting-option/places-sorting-option';

type PlacesSortingProps = {
  sortType: SortType;
};

function PlacesSorting({ sortType }: PlacesSortingProps): JSX.Element {

  /**
   * Открывает/закрывает select
   */
  const handleSpanClick = (): void => {
    const placesOptions: HTMLElement | null =
      document.querySelector('.places__options');
    (placesOptions as HTMLElement).classList.toggle('places__options--closed');
    (placesOptions as HTMLElement).classList.toggle('places__options--opened');
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSpanClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed">
        {sortTypes.map((type, id) => {
          const keyValue = `${id}: ${type}`;
          return (
            <PlacesSortingOption
              activeOption={sortType}
              key={keyValue}
              option={type}
              onPlacesOptionClick={handleSpanClick}
            />
          );
        })}
      </ul>
    </form>
  );
}

export default React.memo(PlacesSorting);
