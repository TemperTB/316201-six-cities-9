import { SortTypes } from './types/types';
/**
 * Пути к страницам
 */
export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/',
  Main = '/',
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

export enum LogoTypes {
  Header = 'header',
  Footer = 'footer',
}

export enum PlaceCardTypes {
  Main = 'cities',
  Favorites = 'favorites',
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

export const START_CITY = CITIES[0];

export const sortTypes: SortTypes = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
