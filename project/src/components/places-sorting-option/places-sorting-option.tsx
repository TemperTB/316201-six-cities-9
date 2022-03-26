import { useAppDispatch } from '../../hooks';
import { SortType } from '../../types/sort';
import { changeSortType } from '../../store/main-process/main-process';

type PlacesSortingOptionsProps = {
  activeOption: string;
  option: SortType;
  onPlacesOptionClick: () => void;
};

function PlacesSortingOption({
  activeOption,
  option,
  onPlacesOptionClick,
}: PlacesSortingOptionsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const onItemClick = () => {
    const sortType = option;
    onPlacesOptionClick();
    dispatch(changeSortType(sortType));
  };

  return (
    <li
      className={`places__option ${
        activeOption === option ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={onItemClick}
      data-testid = "places-sorting-option"
    >
      {option}
    </li>
  );
}

export default PlacesSortingOption;
