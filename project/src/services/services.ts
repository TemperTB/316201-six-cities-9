import { AUTH_TOKEN_KEY_NAME } from '../const';

export type Token = string;

/**
 * Проверить наличие токена
 */
export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

/**
 * Сохранить токен
 */
export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

/**
 * Удалить токен
 */
export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
