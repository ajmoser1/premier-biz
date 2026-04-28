"use client";

import { FormEvent, useState } from "react";
import { servicePackages } from "@/lib/packages";

const defaultPackageOption = "Not sure yet";

function getInitialState(preselectedPackage = defaultPackageOption) {
  return {
  name: "",
  phone: "",
  email: "",
  city: "",
  serviceType: "Pressure Washing",
  selectedPackage: preselectedPackage,
  propertyType: "Residential",
  urgency: "Same-day",
  addOnsInterest: "",
  details: "",
  };
}

type QuoteFormProps = {
  preselectedPackage?: string;
};

export function QuoteForm({ preselectedPackage = defaultPackageOption }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(() => getInitialState(preselectedPackage));

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
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send request");
      }

      setSubmitted(true);
      setForm(getInitialState(preselectedPackage));
    } catch {
      setError("Could not send your request right now. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-900">
        Thanks. We received your request and will follow up quickly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-sky-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-sky-900">Request a Quote</h3>
      <input
        required
        placeholder="Full name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      />
      <input
        required
        placeholder="Phone number"
        value={form.phone}
        onChange={(event) => setForm({ ...form, phone: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      />
      <input
        placeholder="City or ZIP"
        value={form.city}
        onChange={(event) => setForm({ ...form, city: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      />
      <select
        value={form.serviceType}
        onChange={(event) => setForm({ ...form, serviceType: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      >
        <option>Pressure Washing</option>
        <option>Window Cleaning</option>
        <option>Gutter Cleaning</option>
        <option>Trash Can Cleaning</option>
        <option>Roof Cleaning</option>
      </select>
      <select
        value={form.selectedPackage}
        onChange={(event) => setForm({ ...form, selectedPackage: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      >
        <option>{defaultPackageOption}</option>
        {servicePackages.map((item) => (
          <option key={item.slug}>{item.name}</option>
        ))}
      </select>
      <select
        value={form.propertyType}
        onChange={(event) => setForm({ ...form, propertyType: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      >
        <option>Residential</option>
        <option>Commercial</option>
      </select>
      <select
        value={form.urgency}
        onChange={(event) => setForm({ ...form, urgency: event.target.value })}
        className="rounded-lg border border-sky-300 px-3 py-2"
      >
        <option>Same-day</option>
        <option>This week</option>
        <option>Flexible</option>
      </select>
      <textarea
        placeholder="Add-on interests (staining, hauling, handyman, etc.)"
        value={form.addOnsInterest}
        onChange={(event) => setForm({ ...form, addOnsInterest: event.target.value })}
        className="min-h-20 rounded-lg border border-sky-300 px-3 py-2"
      />
      <textarea
        placeholder="Tell us about the job"
        value={form.details}
        onChange={(event) => setForm({ ...form, details: event.target.value })}
        className="min-h-24 rounded-lg border border-sky-300 px-3 py-2"
      />
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
      >
        {submitting ? "Sending..." : "Submit Quote Request"}
      </button>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <p className="text-xs text-sky-500">
        By submitting, you agree to be contacted about your quote request.
      </p>
    </form>
  );
}
