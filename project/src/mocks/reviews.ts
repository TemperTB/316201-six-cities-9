import { OfferReviewsType } from '../types/offer-reviews';

export const REVIEWS: OfferReviewsType = [
  {
    id: 1,
    user: {
      id: 14,
      isPro: true,
      name: 'Corey',
      avatarUrl: 'https://9.react.pages.academy/static/avatar/5.jpg',
    },
    rating: 4,
    comment:
      'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-02-22T21:48:13.667Z',
  },
  {
    id: 2,
    user: {
      id: 17,
      isPro: false,
      name: 'Emely',
      avatarUrl: 'https://9.react.pages.academy/static/avatar/8.jpg',
    },
    rating: 3,
    comment:
      'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-02-22T21:48:13.667Z',
  },
];
