import { MONTHS, PERCENT_PER_STAR } from '../../const';
import { OfferReview } from '../../types/offer-reviews';

type OfferReviewsItemProps = {
  review: OfferReview;
};

/**
 * Переводит дату в нужный формат (согласно макета)
 */
const transformDate = (dateToTransform: string): string => {
  const date = new Date(dateToTransform);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Переводит дату в нужный формат для атрибута time (пример: 2019-01-01)
 */
const transformDateForAtribute = (dateToTransform: string): string => {
  const date = new Date(dateToTransform);
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
  }-${date.getDate()}`;
};

function OfferReviewsItem({ review }: OfferReviewsItemProps): JSX.Element {

  const { user, rating, comment, date } = review;
  const { name, avatarUrl } = user;
  return (
    <li className="reviews__item" data-testid="offer-reviews-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rating * PERCENT_PER_STAR }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={transformDateForAtribute(date)}>
          {transformDate(date)}
        </time>
      </div>
    </li>
  );
}

export default OfferReviewsItem;
