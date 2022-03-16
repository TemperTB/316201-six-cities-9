import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { saveToken, dropToken } from '../services/services';
import { AuthData } from '../types/auth-data';
import { NearbyOffers } from '../types/nearby-offers';
import { OfferReviews, ReviewData } from '../types/offer-reviews';
import { Offers, Offer } from '../types/offers';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { loadNearbyOffers, loadOffer, loadReviews, sendReview } from './data-process/data-process';
import { requireAuthorization } from './offer-process/offer-process';
import { loadOffers } from './offers-process/offers-process';


/**
 * Получение списка предложений (для главной страницы)
 */
export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Получение информации об одном предложении
 */
export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffer',
  async (id: string) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

/**
 * Получение информации о соседних предложениях
 */
export const fetchNearbyOffersAction = createAsyncThunk(
  'data/fetchNearbyOffers',
  async (id: string) => {
    try {
      const {data} = await api.get<NearbyOffers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      store.dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Получение отзывов
 */
export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: string) => {
    try {
      const {data} = await api.get<OfferReviews>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Отправка отзыва
 */
export const fetchSendReview = createAsyncThunk(
  'data/fetchSendReviews',
  async ({id, comment, rating}: ReviewData) => {
    try {
      const {data} = await api.post<OfferReviews>(`${APIRoute.Comments}/${id}`, {comment, rating});
      store.dispatch(sendReview(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Проверка авторизации
 */
export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

/**
 * Авторизация пользователя
 */
export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

/**
 * Выход пользователя (logout)
 */
export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
