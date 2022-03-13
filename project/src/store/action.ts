import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { City, Offers } from '../types/offers';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<string>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('/setError');
export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');
