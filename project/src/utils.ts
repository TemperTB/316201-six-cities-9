import { MAX_COUNT_REVIEWS } from './const';
import { OfferReviews } from './types/offer-reviews';
import { City, Offers } from './types/offers';
import { SortType } from './types/sort';

/**
 * Фильтрует список предложений по городу
 * @param offers список для фильтрации
 * @param city город, по которому произойдет фильтрация
 */
export const filterOffers = (offers: Offers, city: City): Offers => offers.filter((offer) => offer.city.name === city.name);

/**
 * Сортирует список предложений на основе выбранного типа сортировки
 * @param offers список для сортировки
 * @param sortType тип сортировки
 */
export const sortOffers = (offers: Offers, sortType: SortType): Offers => {
  switch (sortType) {
    case 'Popular':
      return offers;
    case 'Price: low to high':
      return offers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

/**
 * Сортирует отзывы согласно ТЗ (от позднего к раннему по дате)
 */
export const sortingReviews = (arr: OfferReviews): OfferReviews => {
  if (arr.length < 2) {
    return arr;
  }
  const newArr = arr.slice();
  return newArr.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
};

/**
 * Ограничивает количество отзывов согласно ТЗ
 */
export const limitingReviews = (arr: OfferReviews): OfferReviews => {
  if (arr.length > 10) {
    return arr.slice(0, MAX_COUNT_REVIEWS);
  }
  return arr;
};

/**
 * Фильтрует и сортирует предложения
 * @param offers - список предложений
 * @param currentCity - город для фильтрации
 * @param sortType - тип сортировки
 */
export const doValidOffers = (offers: Offers, currentCity: City, sortType: SortType): Offers => {
  const filteredOffers: Offers = filterOffers(offers, currentCity);
  const sortedOffers: Offers = sortOffers(filteredOffers, sortType);
  const validOffers: Offers = sortedOffers;
  return validOffers;
};

/**
 * Возвращает случайный элемент массива
 */
export const getRandomArrayElement = <T>(arr: Array<T>): T => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
