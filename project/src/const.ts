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

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octover', 'November', 'December'];

