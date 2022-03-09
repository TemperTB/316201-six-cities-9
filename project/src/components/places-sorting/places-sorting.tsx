import { sortTypes } from '../../const';
import { SortType } from '../../types/types';
import PlacesSortingOptions from '../places-sorting-option/places-sorting-options';

type PlacesSortingProps = {
  sortType: SortType;
};

function PlacesSorting({ sortType }: PlacesSortingProps): JSX.Element {
  const toggleSortTypeVisible = (): void => {
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
        onClick={() => toggleSortTypeVisible()}
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
            <PlacesSortingOptions
              activeOption={sortType}
              key={keyValue}
              option={type}
              toggleSortTypeVisible={toggleSortTypeVisible}
            />
          );
        })}
      </ul>
    </form>
  );
}

export default PlacesSorting;
