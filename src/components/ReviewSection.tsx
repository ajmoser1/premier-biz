import Link from "next/link";
import { MarqueeTrack } from "@/components/MarqueeTrack";
import { getFeaturedGoogleReviews, getGoogleReviewSummary } from "@/lib/googleReviews";
import { siteConfig } from "@/lib/site";

export function ReviewSection() {
  const summary = getGoogleReviewSummary();
  const featuredReviews = getFeaturedGoogleReviews(8);
  const hasRatings = typeof summary.rating === "number" && summary.userRatingCount > 0;
  const marqueeReviews =
    featuredReviews.length > 1 ? [...featuredReviews, ...featuredReviews] : featuredReviews;

  const stars = hasRatings ? "★".repeat(Math.round(summary.rating ?? 0)) : null;

  return (
    <section className="rounded-xl border border-[#e2e0db] bg-white p-8">
      <div>
        <div className="text-center">
          {hasRatings ? (
            <>
              <p className="text-5xl leading-none tracking-[0.18em] text-[#f59e0b] sm:text-6xl md:text-7xl">
                {stars}
              </p>
              <p className="mt-3 text-sm text-[#64748b] md:text-base">
                <span className="font-semibold text-[#1a2744]">{summary.rating?.toFixed(1)} / 5</span>{" "}
                based on {summary.userRatingCount.toLocaleString()} Google reviews
              </p>
            </>
          ) : (
            <p className="text-sm text-[#64748b]">
              Sync your Google reviews to show your live rating and latest customer feedback.
            </p>
          )}
        </div>

        {marqueeReviews.length > 0 ? (
          <div className="mt-5 -mx-2">
            <MarqueeTrack mobilePixelsPerSecond={20} desktopPixelsPerSecond={28}>
              {marqueeReviews.map((review, index) => (
                <article
                  key={`${review.authorName}-${review.publishTime}-${index}`}
                  className="w-[min(84vw,340px)] flex-none rounded-lg border border-[#e2e0db] bg-[#f8f6f1] p-4 sm:w-[320px]"
                >
                  <p className="text-sm leading-relaxed text-[#334155]">
                    &ldquo;
                    {review.text.length > 180
                      ? `${review.text.slice(0, 180).trim()}...`
                      : review.text}
                    &rdquo;
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#1e4d3a]">
                    {review.authorName}
                  </p>
                  <p className="mt-1 text-xs text-[#64748b]">
                    {"★".repeat(review.rating)} {review.relativePublishTimeDescription}
                  </p>
                </article>
              ))}
            </MarqueeTrack>
          </div>
        ) : (
          <p className="mt-4 text-center text-sm text-[#64748b]">
            No written Google reviews are currently returned for this listing.
          </p>
        )}

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={summary.googleMapsUri || siteConfig.googleBusinessProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#1e4d3a] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#163d2e]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Leave a Google Review
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-[#e2e0db] px-5 py-3 text-sm font-medium text-[#1a2744] transition-all hover:border-[#7db89b]"
          >
            Send a Testimonial
          </Link>
        </div>
      </div>
    </section>
  );
}
