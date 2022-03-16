import { useAppDispatch } from '../../hooks';
import { changeSortType } from '../../store/action';
import { SortType } from '../../types/sort';

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
  // eslint-disable-next-line no-console
  console.info('PlacesSortingOption');

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
