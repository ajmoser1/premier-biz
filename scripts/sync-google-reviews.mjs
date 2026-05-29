import { writeFile } from "node:fs/promises";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
  console.error("Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID in your environment.");
  process.exit(1);
}

const endpoint = `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,googleMapsUri,rating,userRatingCount,reviews`;
const response = await fetch(endpoint, {
  headers: {
    "X-Goog-Api-Key": apiKey,
    "X-Goog-FieldMask":
      "id,displayName,googleMapsUri,rating,userRatingCount,reviews",
  },
});

if (!response.ok) {
  const body = await response.text();
  console.error(`Google Places API failed (${response.status}): ${body}`);
  process.exit(1);
}

const data = await response.json();
const normalizedReviews = Array.isArray(data.reviews)
  ? data.reviews
      .map((review) => ({
        authorName: review?.authorAttribution?.displayName ?? "Google User",
        authorUri: review?.authorAttribution?.uri ?? undefined,
        profilePhotoUri: review?.authorAttribution?.photoUri ?? undefined,
        rating: Number(review?.rating ?? 0),
        text: review?.text?.text ?? "",
        relativePublishTimeDescription:
          review?.relativePublishTimeDescription ?? "",
        publishTime: review?.publishTime ?? "",
      }))
      .filter((review) => review.text && review.rating > 0)
      .sort((a, b) => Date.parse(b.publishTime) - Date.parse(a.publishTime))
  : [];

const output = {
  placeId,
  businessName: data?.displayName?.text || "Premier Home Services",
  googleMapsUri:
    data?.googleMapsUri ||
    `https://www.google.com/maps/place/?q=place_id:${placeId}`,
  rating: Number.isFinite(data?.rating) ? Number(data.rating) : null,
  userRatingCount: Number.isFinite(data?.userRatingCount)
    ? Number(data.userRatingCount)
    : 0,
  fetchedAt: new Date().toISOString(),
  reviews: normalizedReviews,
};

await writeFile(
  "src/data/google-reviews.json",
  `${JSON.stringify(output, null, 2)}\n`,
  "utf8",
);

console.log(
  `Synced ${output.reviews.length} reviews (${output.rating ?? "n/a"} stars, ${output.userRatingCount} total ratings).`,
);
