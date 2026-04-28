'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { pricingTiers } from '@/content/pricing';

type Billing = 'monthly' | 'annual';

const billingOptions: { value: Billing; label: string; hint?: string }[] = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annual', label: 'Annual', hint: 'Save 20%' }
];

export function PricingTable() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <div>
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Billing cadence"
          className="inline-flex rounded-full border border-slate-200 bg-white p-1"
        >
          {billingOptions.map((opt) => {
            const selected = billing === opt.value;
            return (
              <button
                key={opt.value}
                role="tab"
                aria-selected={selected}
                type="button"
                onClick={() => setBilling(opt.value)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                  selected
                    ? 'bg-navy-900 text-white'
                    : 'text-slate-600 hover:text-navy-900'
                )}
              >
                {opt.label}
                {opt.hint && (
                  <span
                    className={cn(
                      'ml-2 rounded-full px-2 py-0.5 text-[11px] font-semibold',
                      selected
                        ? 'bg-teal-400 text-navy-900'
                        : 'bg-teal-50 text-teal-700'
                    )}
                  >
                    {opt.hint}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier) => {
          const price = billing === 'annual' ? tier.annual : tier.monthly;
          const showCadence = !tier.customPrice;
          return (
            <li key={tier.name}>
              <article
                className={cn(
                  'flex h-full flex-col rounded-2xl border bg-white p-7 shadow-card',
                  tier.highlighted
                    ? 'border-teal-300 ring-1 ring-teal-300'
                    : 'border-slate-200'
                )}
              >
                <header>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-navy-900">
                      {tier.name}
                    </h3>
                    {tier.highlighted && (
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{tier.tagline}</p>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-navy-900">
                      {price}
                    </span>
                    {showCadence && (
                      <span className="text-sm text-slate-500">
                        {tier.cadence}
                      </span>
                    )}
                  </p>
                  {!tier.customPrice && billing === 'annual' && (
                    <p className="mt-1 text-xs text-slate-500">
                      Billed annually · 20% off monthly
                    </p>
                  )}
                  <p
                    className={cn(
                      'mt-3 text-xs font-medium',
                      tier.setupFee.includes('waived')
                        ? 'text-teal-700'
                        : 'text-slate-500'
                    )}
                  >
                    {tier.setupFee}
                  </p>
                </header>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-teal-500"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Link
                    href={tier.ctaHref}
                    className={cn(
                      'inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-medium transition-colors',
                      tier.highlighted
                        ? 'bg-teal-500 text-navy-900 hover:bg-teal-400'
                        : 'border border-slate-200 bg-white text-navy-800 hover:bg-slate-50'
                    )}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
