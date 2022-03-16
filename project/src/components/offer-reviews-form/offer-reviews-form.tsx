import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MIN_COMMENT_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { errorHandle } from '../../services/error-handle';
import { fetchSendReview } from '../../store/api-actions';

function OfferReviewsForm(): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('OfferReviewsForm');
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  /**
   * Проверка согласно ТЗ (если пользователь ввел комментарий из 50+ символов и выбрал рейтинг, кнопка для отправки разблокируется)
   */
  useEffect(() => {
    const submitButton: HTMLButtonElement | null =
      document.querySelector('.form__submit');
    rating !== 0 && comment.length >= MIN_COMMENT_LENGTH
      ? ((submitButton as HTMLButtonElement).disabled = false)
      : ((submitButton as HTMLButtonElement).disabled = true);
  }, [rating, comment]);

  /**
   * Действия при изменении рейтинга
   */
  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  };

  /**
   * Действия при изменении комментария
   */
  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setComment(value);
  };

  const fieldset: HTMLFieldSetElement | null =
    document.querySelector('.reviews__fieldset');

  /**
   * Асинхронное действие, которое следит за отправкой комментария на сервер. При корректной отправке очищает и разблокирует форму
   */
  const sendReview = async () => {
    try {
      await dispatch(fetchSendReview({ id: offer.id, comment, rating }));
      setComment('');
      setRating(0);
      (fieldset as HTMLFieldSetElement).disabled = false;
    } catch (error) {
      errorHandle(error);
      (fieldset as HTMLFieldSetElement).disabled = false;
    }
  };

  /**
   * Действия при отправке формы (форма блокируется)
   */
  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    (fieldset as HTMLFieldSetElement).disabled = true;
    sendReview();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <fieldset className="reviews__fieldset">
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          <input
            onChange={ratingChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={5}
            id="5-stars"
            type="radio"
          />
          <label
            htmlFor="5-stars"
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            onChange={ratingChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={4}
            id="4-stars"
            type="radio"
          />
          <label
            htmlFor="4-stars"
            className="reviews__rating-label form__rating-label"
            title="good"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            onChange={ratingChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={3}
            id="3-stars"
            type="radio"
          />
          <label
            htmlFor="3-stars"
            className="reviews__rating-label form__rating-label"
            title="not bad"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            onChange={ratingChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={2}
            id="2-stars"
            type="radio"
          />
          <label
            htmlFor="2-stars"
            className="reviews__rating-label form__rating-label"
            title="badly"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input
            onChange={ratingChangeHandler}
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={1}
            id="1-star"
            type="radio"
          />
          <label
            htmlFor="1-star"
            className="reviews__rating-label form__rating-label"
            title="terribly"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea
          onChange={commentChangeHandler}
          value={comment}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default OfferReviewsForm;
