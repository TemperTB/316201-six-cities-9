import { CityType, OffersType } from './types/offers';

export const filterCity = (offers: OffersType, city: CityType): OffersType => offers.filter((offer) => offer.city.name === city.name);
