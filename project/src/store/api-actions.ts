import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../const';
import { Offers } from '../types/offers';
import { loadOffers } from './action';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);
