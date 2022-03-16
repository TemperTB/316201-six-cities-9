import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';


/**
 * Редирект по маршруту
 */
export const redirectToRoute = createAction<AppRoute>('/redirectToRoute');
