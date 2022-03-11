import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/offers';

export const changeCity = createAction<{ city: CityType }>('main/changeCity');
export const changeSortType = createAction<{ sortType: string }>('main/changeSortType');
