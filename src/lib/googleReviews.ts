import reviewsData from "@/data/google-reviews.json";

type GoogleReviewRecord = {
  readonly authorName: string;
  readonly rating: number;
  readonly text: string;
  readonly relativePublishTimeDescription: string;
  readonly publishTime: string;
  readonly profilePhotoUri?: string;
  readonly authorUri?: string;
};

type GoogleReviewsPayload = {
  readonly placeId: string;
  readonly businessName: string;
  readonly googleMapsUri: string;
  readonly rating: number | null;
  readonly userRatingCount: number;
  readonly fetchedAt: string | null;
  readonly reviews: readonly GoogleReviewRecord[];
};

const payload = reviewsData as GoogleReviewsPayload;

export function getGoogleReviewSummary() {
  return {
    placeId: payload.placeId,
    businessName: payload.businessName,
    googleMapsUri: payload.googleMapsUri,
    rating: payload.rating,
    userRatingCount: payload.userRatingCount,
    fetchedAt: payload.fetchedAt,
  };
}

export function getFeaturedGoogleReviews(limit = 3) {
  return payload.reviews.slice(0, limit);
}
