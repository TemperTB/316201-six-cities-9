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
 * Возвращает случайный элемент массива
 */
export const getRandomArrayElement = <T>(arr: Array<T>): T => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
