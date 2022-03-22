import { SortTypes } from './types/sort';
/**
 * Пути к страницам
 */
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/',
  Main = '/',
  NotFound = '/not-found',
}

/**
 * Статусы авторизации
 */
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

/**
 * Одна звезда рейтинга занимает 20 процентов ширины
 */
export const PERCENT_PER_STAR = 20;

/**
 * Константы для карты
 */
export const URL_MARKER_CURRENT = '../img/pin-active.svg';
export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const ICON_WIDTH = 40;
export const ICON_HEIGHT = 40;
export const ANCHOR_RELATIVE_X = 20;
export const ANCHOR_RELATIVE_Y = 40;

/**
 * Варианты для отрисовки логотипа
 */
export enum LogoTypes {
  Header = 'header',
  Footer = 'footer',
}

/**
 * Типы карточек городов
 */
export enum PlaceCardTypes {
  Main = 'cities',
  Favorite = 'favorites',
  Nearby = 'near-places',
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octover',
  'November',
  'December',
];

/**
 * Список городов
 */
export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

/**
 * Начальный город для отрисовки карты
 */
export const START_CITY = CITIES[0];


/**
 * Варианты сортировки
 */
export const sortTypes: SortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

/**
 * Маршруты для связи с сервером
 */
export enum APIRoute {
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Offers = '/hotels',
}


/**
 * Коды ответов от сервера
 */
export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

/**
 * Максимальное количество отзывов для отображения
 */
export const MAX_COUNT_REVIEWS = 10;

/**
 * Минимальная длина комментария
 */
export const MIN_COMMENT_LENGTH = 50;


export enum NameSpace {
  offer = 'OFFER',
  main = 'MAIN',
  user = 'USER',
  favorite = 'FAVORITE',
}
