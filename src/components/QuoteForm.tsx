"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  serviceType: "Pressure Washing",
  propertyType: "Residential",
  urgency: "Same-day",
  details: "",
};

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialState);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
        Thanks. We received your request and will follow up quickly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Request a Quote</h3>
      <input
        required
        placeholder="Full name"
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      />
      <input
        required
        placeholder="Phone number"
        value={form.phone}
        onChange={(event) => setForm({ ...form, phone: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      />
      <input
        placeholder="City or ZIP"
        value={form.city}
        onChange={(event) => setForm({ ...form, city: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      />
      <select
        value={form.serviceType}
        onChange={(event) => setForm({ ...form, serviceType: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      >
        <option>Pressure Washing</option>
        <option>Window Cleaning</option>
        <option>Gutter Cleaning</option>
        <option>Trash Can Cleaning</option>
        <option>Roof Cleaning</option>
      </select>
      <select
        value={form.propertyType}
        onChange={(event) => setForm({ ...form, propertyType: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      >
        <option>Residential</option>
        <option>Commercial</option>
      </select>
      <select
        value={form.urgency}
        onChange={(event) => setForm({ ...form, urgency: event.target.value })}
        className="rounded-lg border border-slate-300 px-3 py-2"
      >
        <option>Same-day</option>
        <option>This week</option>
        <option>Flexible</option>
      </select>
      <textarea
        placeholder="Tell us about the job"
        value={form.details}
        onChange={(event) => setForm({ ...form, details: event.target.value })}
        className="min-h-24 rounded-lg border border-slate-300 px-3 py-2"
      />
      <button
        type="submit"
        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Submit Quote Request
      </button>
      <p className="text-xs text-slate-500">
        Temporary local form. Connect to your CRM/email provider before launch.
      </p>
    </form>
  );
}
