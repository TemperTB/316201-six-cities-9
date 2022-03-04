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
