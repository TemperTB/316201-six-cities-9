import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { saveToken, dropToken } from '../services/services';
import { AuthData } from '../types/auth-data';
import { NearbyOffers } from '../types/nearby-offers';
import { OfferReviews, ReviewData } from '../types/offer-reviews';
import { Offers, Offer } from '../types/offers';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { loadNearbyOffers, loadOffer, loadReviews } from './offer-process/offer-process';
import { requireAuthorization } from './user-process/user-process';
import { changeOffersLoadStatus, loadOffers } from './main-process/main-process';
import { FavoriteOffers, FavoriteOffersData } from '../types/favorite-offers';
import { loadFavoriteOffers } from './favorite-process/favorite-process';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';


/**
 * Получение списка предложений (для главной страницы)
 */
export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      dispatch(loadOffers(data));
    } catch (error) {
      dispatch(changeOffersLoadStatus(true));
      errorHandle(error);
    }
  },
);

/**
 * Получение информации об одном предложении
 */
export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

/**
 * Получение информации о соседних предложениях
 */
export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<NearbyOffers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      dispatch(loadNearbyOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Получение отзывов
 */
export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferReviews>(`${APIRoute.Comments}/${id}`);
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Отправка отзыва
 */
export const fetchSendReview = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSendReviews',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<OfferReviews>(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Получение списка избранных предложений
 */
export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FavoriteOffers>(APIRoute.Favorite);
      dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Добавление/удаление выбранного предложения из избранного
 * status = 0 - удалить
 * status = 1 - добавить
 */
export const fetchChangeStatusOffer = createAsyncThunk<void, FavoriteOffersData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchChangeStatusOffer',
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      await api.post<OfferReviews>(`${APIRoute.Favorite}/${id}/${status}`);
    } catch (error) {
      errorHandle(error);
    }
  },
);

/**
 * Проверка авторизации
 */
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

/**
 * Авторизация пользователя
 */
export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

/**
 * Выход пользователя (logout)
 */
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
