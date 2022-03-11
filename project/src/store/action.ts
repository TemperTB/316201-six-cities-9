import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/offers';

export const changeCity = createAction<{ city: City }>('main/changeCity');
export const changeSortType = createAction<{ sortType: string }>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
