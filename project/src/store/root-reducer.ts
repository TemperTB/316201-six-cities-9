import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersProcess } from './main-process/main-process';
import { userProcess } from './user-process/user-process';
import { offerProcess } from './offer-process/offer-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.offer]: offerProcess.reducer,
  [NameSpace.main]: offersProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.favorite]: favoriteProcess.reducer,
});
