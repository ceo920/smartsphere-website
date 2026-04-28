'use client';

import { useState, type FormEvent } from 'react';
import { cn } from '@/lib/cn';

const industryOptions = [
  'Healthcare',
  'Real Estate',
  'Logistics',
  'E-commerce',
  'Banking & Finance',
  'Education',
  'Hospitality',
  'Customer Support',
  'Other'
] as const;

const employeeRanges = [
  '1–10',
  '11–50',
  '51–200',
  '201–1,000',
  '1,001–5,000',
  '5,000+'
] as const;

const inputBase =
  'block w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 shadow-sm placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 disabled:opacity-50';

const labelBase = 'mb-1.5 block text-sm font-medium text-navy-900';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // UI-only: backend wiring lives in app/api/contact/route.ts when added.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-sm text-teal-900">
        <p className="font-semibold">Thanks — we’ll be in touch within one business day.</p>
        <p className="mt-2 text-teal-800">
          A member of our team will reach out to schedule a demo on your stack.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputBase}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputBase}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelBase}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={inputBase}
            placeholder="Acme, Inc."
          />
        </div>
        <div>
          <label htmlFor="employees" className={labelBase}>
            Company size
          </label>
          <select
            id="employees"
            name="employees"
            required
            defaultValue=""
            className={inputBase}
          >
            <option value="" disabled>
              Select range
            </option>
            {employeeRanges.map((r) => (
              <option key={r} value={r}>
                {r} employees
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="industry" className={labelBase}>
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className={inputBase}
        >
          <option value="" disabled>
            Select your industry
          </option>
          {industryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          What are you trying to solve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputBase, 'resize-y')}
          placeholder="A few sentences on the workflows or call types you'd want to automate first."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-11 items-center justify-center rounded-md bg-teal-500 px-6 text-sm font-medium text-navy-900 transition-colors hover:bg-teal-400 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Request a demo'}
      </button>

      <p className="text-xs text-slate-500">
        By submitting this form you agree to our processing of the data above
        for the purpose of responding to your inquiry.
      </p>
    </form>
  );
}
