import { ActionCreatorWithoutPayload, AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { errorHandle } from '../../services/error-handle';
import { fetchChangeStatusOffer } from '../../store/api-actions';

type BookmarkButtonMainProps = {
  cb:
    | AsyncThunk<void, void, Record<string, unknown>>
    | ActionCreatorWithoutPayload<string>;
  id: number;
  isFavorite: boolean;
};

function BookmarkButtonMain({
  cb,
  id,
  isFavorite,
}: BookmarkButtonMainProps): JSX.Element {
  const dispatch = useAppDispatch();

  /**
   * Асинхронное действие, которое следит за изменением статуса предложения на сервере.
   * При корректном изменении вызывает cb для перерисовки нужных данных
   */
  const changeOfferStatus = async () => {
    try {
      isFavorite
        ? await dispatch(fetchChangeStatusOffer({ id, status: 0 }))
        : await dispatch(fetchChangeStatusOffer({ id, status: 1 }));
      dispatch(cb());
    } catch (error) {
      errorHandle(error);
    }
  };

  return (
    <button
      className={`place-card__bookmark-button button ${
        isFavorite && 'place-card__bookmark-button--active'
      }`}
      type="button"
      onClick={changeOfferStatus}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButtonMain;
