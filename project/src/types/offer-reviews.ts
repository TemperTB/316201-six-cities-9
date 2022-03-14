export type OfferReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type OfferReviews = OfferReview[];

export type ReviewData = {
  id: number;
  comment: string;
  rating: number;
};
