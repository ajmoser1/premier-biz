"use client";

import { FormEvent, useState } from "react";

// Simplified service options for cognitive load reduction
const serviceOptions = [
  { id: "pressure-washing", label: "Pressure Washing" },
  { id: "window-cleaning", label: "Window Cleaning" },
  { id: "gutter-cleaning", label: "Gutter Cleaning" },
  { id: "roof-cleaning", label: "Roof Cleaning" },
  { id: "landscaping", label: "Landscaping" },
  { id: "junk-removal", label: "Junk Removal" },
  { id: "fence-repair", label: "Fence Building & Repair" },
  { id: "deck-staining", label: "Deck Staining" },
  { id: "estate-cleanout", label: "Estate/Garage Cleanout" },
];

function getInitialState() {
  return {
    name: "",
    phone: "",
    email: "",
    services: [] as string[],
    details: "",
  };
}

type QuoteFormProps = {
  preselectedPackage?: string;
};

export function QuoteForm({ preselectedPackage }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(() => {
    const initial = getInitialState();
    if (preselectedPackage) {
      initial.details = `Interested in: ${preselectedPackage}`;
    }
    return initial;
  });

  const toggleService = (serviceId: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          serviceType: form.services.join(", ") || "General inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send request");
      }

      setSubmitted(true);
      setForm(getInitialState());
    } catch {
      setError("Could not send your request right now. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  // Success state - Psychology: positive peak-end
  if (submitted) {
    return (
      <div className="rounded-xl border border-[#7db89b] bg-[#1e4d3a]/5 p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e4d3a]">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-semibold text-[#1a2744]">
          Request Received
        </h3>
        <p className="mt-2 text-[#64748b]">
          We&apos;ll get back to you within 24 hours with your free quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-[#1e4d3a] hover:text-[#163d2e]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-[#e2e0db] bg-white p-6 shadow-lg"
    >
      {/* Header with value proposition */}
      <div className="mb-6 text-center">
        <h3 className="font-serif text-2xl font-semibold text-[#1a2744]">
          Get Your Free Quote
        </h3>
        <p className="mt-1 text-sm text-[#64748b]">
          Quick response within 24 hours
        </p>
      </div>

      <div className="space-y-5">
        {/* Name field with validation indicator */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1a2744]">
            Name
          </label>
          <input
            id="name"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-md border border-[#e2e0db] bg-white px-4 py-3 text-[#1a1a1a] placeholder-[#64748b] transition-all focus:border-[#7db89b] focus:outline-none focus:ring-2 focus:ring-[#7db89b]/20"
          />
        </div>

        {/* Phone field */}
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1a2744]">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-md border border-[#e2e0db] bg-white px-4 py-3 text-[#1a1a1a] placeholder-[#64748b] transition-all focus:border-[#7db89b] focus:outline-none focus:ring-2 focus:ring-[#7db89b]/20"
          />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1a2744]">
            Email <span className="text-[#64748b] font-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-md border border-[#e2e0db] bg-white px-4 py-3 text-[#1a1a1a] placeholder-[#64748b] transition-all focus:border-[#7db89b] focus:outline-none focus:ring-2 focus:ring-[#7db89b]/20"
          />
        </div>

        {/* Service chips - Psychology: visual selection reduces cognitive load */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#1a2744]">
            Services Interested In
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => toggleService(service.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  form.services.includes(service.id)
                    ? "bg-[#1e4d3a] text-white"
                    : "border border-[#e2e0db] bg-white text-[#1a2744] hover:border-[#7db89b]"
                }`}
              >
                {form.services.includes(service.id) && (
                  <svg className="mr-1.5 -ml-0.5 inline h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Details - optional, simplified */}
        <div>
          <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-[#1a2744]">
            Anything else? <span className="text-[#64748b] font-normal">(optional)</span>
          </label>
          <textarea
            id="details"
            placeholder="Tell us about your property or specific needs..."
            value={form.details}
            onChange={(event) => setForm({ ...form, details: event.target.value })}
            rows={3}
            className="w-full rounded-md border border-[#e2e0db] bg-white px-4 py-3 text-[#1a1a1a] placeholder-[#64748b] transition-all focus:border-[#7db89b] focus:outline-none focus:ring-2 focus:ring-[#7db89b]/20 resize-none"
          />
        </div>

        {/* Submit button - large tap target (Fitts' Law) */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-[#1e4d3a] px-6 py-4 text-base font-medium text-white transition-all hover:bg-[#163d2e] hover:shadow-lg disabled:opacity-70"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Get My Free Quote"
          )}
        </button>

        {error && (
          <p className="text-center text-sm text-red-600">{error}</p>
        )}

        <p className="text-center text-xs text-[#64748b]">
          By submitting, you agree to be contacted about your quote.
        </p>
      </div>
    </form>
  );
}
