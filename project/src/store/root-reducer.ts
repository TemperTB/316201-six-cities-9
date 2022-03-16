import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './offers-process/offers-process';
import { userProcess } from './offer-process/offer-process';
import { offerProcess } from './data-process/data-process';

export const rootReducer = combineReducers({
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.offers]: offersProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
