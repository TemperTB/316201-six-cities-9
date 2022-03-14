import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { NearbyOffers } from '../types/nearby-offers';
import { OfferReviews } from '../types/offer-reviews';
import { City, Offers, Offer } from '../types/offers';

/**
 * Изменение города для фильтрации на главной
 */
export const changeCity = createAction<City>('main/changeCity');
/**
 * Изменение типа сортировки
 */
export const changeSortType = createAction<string>('main/changeSortType');
/**
 * Загрузка предложений
 */
export const loadOffers = createAction<Offers>('data/loadOffers');
/**
 * Загрузка конкретого предложения
 */
export const loadOffer = createAction<Offer>('data/loadOffer');
/**
 * Загрузка соседних предложений
 */
export const loadNearbyOffers = createAction<NearbyOffers>('data/loadNearbyOffers');
/**
 * Загрузка отзывов
 */
export const loadReviews = createAction<OfferReviews>('data/loadReviews');
/**
 * Отправка отзыва
 */
export const sendReview = createAction<OfferReviews>('data/sendReview');
/**
 * Изменение статуса авторизации
 */
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
/**
 * Редирект по маршруту
 */
export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');
