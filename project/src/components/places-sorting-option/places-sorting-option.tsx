import { useAppDispatch } from '../../hooks';
import { SortType } from '../../types/sort';
import { changeSortType } from '../../store/offers-process/offers-process';

type PlacesSortingOptionsProps = {
  activeOption: string;
  option: SortType;
  toggleSortTypeVisible: () => void;
};

function PlacesSortingOption({
  activeOption,
  option,
  toggleSortTypeVisible,
}: PlacesSortingOptionsProps): JSX.Element {

  const dispatch = useAppDispatch();
  const changeActiveCard = () => {
    const sortType = option;
    toggleSortTypeVisible();
    dispatch(changeSortType(sortType));
  };

  return (
    <li
      className={`places__option ${
        activeOption === option ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={() => changeActiveCard()}
    >
      {option}
    </li>
  );
}

export default PlacesSortingOption;
